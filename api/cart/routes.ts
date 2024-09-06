import express from "express";
import { cartController } from "./controller";
import { clientRoutes } from "../../middlewares/clientRoutes";

const { addCart, getCarts, getCart } = cartController;
const cartRouter = express.Router();



cartRouter.get("/getCarts", clientRoutes, getCarts);
cartRouter.get("/getCart/:id", clientRoutes, getCart); 
cartRouter.post("/addCarts", clientRoutes, addCart); 
cartRouter.post("/confirmCart",  (req, res) => {});
cartRouter.get("/updateCart/:id",  (req, res) => {});
cartRouter.get("/deleteCart/:id",  (req, res) => {});

export default cartRouter;
