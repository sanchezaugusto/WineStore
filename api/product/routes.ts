import express from "express";
import { productController } from "./controller";
import { salerRoutes } from "../../middlewares/salerRoutes";

const { getProduct, getProducts, getProductDetails, createProduct, deleteProduct, editProduct } =
  productController;

const productRouter = express.Router();

productRouter.get("/", getProducts); 
productRouter.get("/details", getProductDetails); 
productRouter.get("/:id", getProduct); 
productRouter.post("/addProduct", salerRoutes, createProduct); 
productRouter.delete("/deleteProduct/:id", salerRoutes, deleteProduct);
productRouter.put("/editProduct/:id", salerRoutes, editProduct);

export default productRouter;