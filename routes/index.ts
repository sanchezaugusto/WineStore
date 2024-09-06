import express from "express";

import userRouter from "../api/user/routes";
import productRouter from "../api/product/routes";
import cartRouter from "../api/cart/routes";
import orderRouter from "../api/order/routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/cart", cartRouter);
router.use("/orders", orderRouter)

export default router;
