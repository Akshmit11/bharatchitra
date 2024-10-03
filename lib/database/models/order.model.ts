import { Schema, model, models, Document } from "mongoose";
import { IProduct } from "./product.model";

export type IOrderItem = {
  _id: string;
  product: IProduct;
  quantity: number;
  price: number;
};

const OrderItemSchema: Schema<IOrderItem> = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export interface IOrder extends Document {
  _id: string;
  user: { _id: string; email: string; firstName: string; lastName: string };
  razorpayId: string;
  razorpayOrderId: string;
  items: IOrderItem[];
  totalAmount: number;
  createdAt: Date;
}

const OrderSchema: Schema<IOrder> = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  razorpayId: { type: String, required: true },
  razorpayOrderId: { type: String, required: true },
  items: { type: [OrderItemSchema], required: true },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
