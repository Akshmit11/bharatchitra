"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { connectToDatabase } from "../database/mongoose";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import Product from "../database/models/product.model";
import { revalidatePath } from "next/cache";
import Order from "../database/models/order.model";

// create user
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// update user
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("User update failed");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// delete user
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find the user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Unlink relationships in parallel
    await Promise.all([
      // Remove references from the 'Product' collection
      Product.updateMany(
        { uploadedBy: userToDelete._id },
        { $unset: { uploadedBy: 1 } }
      ),
      Order.updateMany(
        { user: userToDelete._id },
        { $unset: { user: 1 } }
      ),
    ]);

    // Delete the user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);

    // Revalidate the path (for Next.js ISR)
    revalidatePath("/");

    // Return deleted user info
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user and unlink relationships.");
  }
}

// get user by id
export const getUserById = async (userId: string) => {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};