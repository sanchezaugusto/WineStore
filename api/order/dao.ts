import Order from "./model";
import { IOrder, IOrderProduct } from "./types";

class OrderDao{

    async getOrderById(id: string) {
      console.log(id as string, "Dao")
        try {
          const order = await Order.findById(id);
          return order;
        } catch (error) {
          throw Error((error as Error).message);
        }

    }

    async getOrdersByUserId(user_id: string) {
      console.log(user_id as string, "Dao")
        try {
          console.log(user_id as string, "Dao")
          const orders = await Order.find({user_id: user_id})
          return orders;
        } catch (error) {
          throw Error((error as Error).message);
        }

    }

    async createOrder(order: IOrder) {
        try {
          const newOrder = await Order.create(order);
          return newOrder;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }



}
export const orderDao = new OrderDao();