import { Request, Response } from "express";
import { orderService } from "./service"
import { IOrder } from "./types"

const { getOrdersByUserId, getOrderById, createOrder} = orderService;

class OrderController {

    async getOrderById(req: Request, res: Response){
    const {id} = req.query;
    console.log(id as string, "Controller")
    try {
      const order = await getOrderById(id as string);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(400).json({ error: "Order not found" });
    }
    }

    async getOrdersByUserId(req: Request, res: Response){
        const {user_id} = req.query;
        console.log(user_id as string, "Controller")
        try {
          const orders = await getOrdersByUserId(user_id as string);
          return res.status(200).json(orders);
        } catch (error) {
          return res.status(400).json({ error: "Order not found" });
        }
    }

    async createOrder(req: Request, res: Response){
        try{
            const order: IOrder = req.body
            const newOrder = await createOrder(order);
            res.status(200).json(newOrder);
        } catch (error){
            res.status(400).json({ message: (error as Error).message })
        }
    }

}

export const orderController = new OrderController();