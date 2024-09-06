import { orderDao } from "./dao";
import { IOrder, IOrderProduct } from "./types";
import { productDao } from "../product/dao";
//import { IProduct } from "../../types"; 

const { createOrder, getOrderById, getOrdersByUserId } = orderDao;
const { editProduct, getProductById } = productDao;


class OrderService {
    async getOrdersByUserId(userId: string) {
        console.log(userId as string, "Service")
        try{
            const orders = await getOrdersByUserId(userId);
            return orders;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getOrderById(id: string) {
    console.log(id as string, "Service")
    try{
        const order = await getOrderById(id);
        return order;
    } catch (error) {
        throw Error((error as Error).message);
    }
    }


    async createOrder(order: IOrder) {
    const { products } = order;
    try{
        const newOrder = await createOrder(order);
        products.forEach(async (product: IOrderProduct) => {
            const productData = await getProductById(product.product_id);
            if(!productData){
                throw Error("Product not found");
            }
            await editProduct(product.product_id, {
                ...productData.toObject(),
                stock: (productData.stock! - product.quantity!)
            });
        });
        return newOrder;
    } catch (error){
        throw Error ((error as Error).message);
    }
}
    
}

export const orderService = new OrderService();