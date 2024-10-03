import { Schema, Document, model, models } from "mongoose";
import { IUser } from "./user.model";

export interface IProduct extends Document {
  _id: string;
  name: string;
  description: string;
  price: number;
  fileUrl: string;
  type: "image" | "video";
  tags: string[];
  uploadedBy: IUser;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  fileUrl: { type: String, required: true },
  type: { type: String, required: true, enum: ["image", "video"] },
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
