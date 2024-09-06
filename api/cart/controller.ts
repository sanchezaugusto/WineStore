import { Request, Response } from "express";
import { cartService } from "./service";
import { ICart } from "../../types";
const { getCarts, getCart, addCart } = cartService;

class CartController {

  async getCarts (req: Request, res:Response) {
    try {
      const carts = await getCarts();
      return res.status(200).json(carts);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getCart (req: Request, res:Response) {
    const { id } = req.query;
    try {
      const cart = await getCart(id as string);
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async addCart(req: Request, res: Response) {
    const cart = req.body;
    console.log(req.body);
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

}

export const cartController = new CartController();
