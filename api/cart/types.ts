import { Types } from "mongoose";

export interface IProduct {
  _id?: string;  
  name: string;
  description: string;
  stock: number;
  price: number;
  category: string;  
  image?: string;  
}
