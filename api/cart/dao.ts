import Cart from "./model";
import { ICart } from "../../types";

class CartDao {
  async getAllCarts(){
    try{
      const carts = await Cart.find();
      return carts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async getCartById(cartId: string) {
    try {
      const user = await Cart.findById(cartId);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }


  async addCart(cart: ICart) {
    console.log(cart);
    try {
      const newCart = await Cart.create(cart);
      console.log(newCart);
      return newCart;
    } catch (error) {
      console.log(error)
      throw Error((error as Error).message);
    }
  }
}

export const cartDao = new CartDao();
