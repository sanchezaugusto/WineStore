import { Types } from "mongoose";

export interface IOrderProduct {
  product_id: string;
  quantity: number;
  sub_total: number;
}

export interface IOrder {
  user_id: string;
  products: IOrderProduct[];
  total_price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
