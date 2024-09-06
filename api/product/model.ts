import { Schema, model } from "mongoose";

const winerySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  grape: {
    type: String,
    required: true,
  },
  winery: {
    type: winerySchema,  
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  alcoholContent: {
    type: Number,
    required: true,
  },
  bottleSize: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  image: {
    type: String,
    default: "",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required:true
  }
});

const Product = model("Product", productSchema);

export default Product;
