import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  productsNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  clerkId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  productsNumber: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema)

export default User;