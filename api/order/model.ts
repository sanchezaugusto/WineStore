import { Schema, model } from "mongoose";

const orderModel = new Schema(
{
  user_id:{
    type: String,
    ref: "User",
    required: true,
    unique: true,
  },
  products: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      sub_total:{
        type: Number,
        required: true,
      }
    },
  ],
  total_price: {
    type: Number,
    required: true,
  },
},
{ timestamps: true},

);

orderModel.index({ createdAt: 1}, { expireAfterSeconds: 60 * 60 * 24});

const Order = model("Order", orderModel);

export default Order;
