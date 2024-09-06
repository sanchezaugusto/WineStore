import { ICart } from "../../types";
import { cartDao } from "./dao";

const { getAllCarts,
        getCartById,
        addCart 
} = cartDao;

class CartService {

  async getCarts() {
    try {
      const carts = await getAllCarts();
      return carts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }


  async getCart(id: string) {
    try {
      const cart = await getCartById(id);
      return cart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async addCart(cart: ICart) {
    try {
      const newCart = await addCart(cart);
      return newCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartService = new CartService();
