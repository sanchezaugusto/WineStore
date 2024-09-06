import { Request, Response } from "express";
import { productService } from "./service";
import { ISearchParams } from "./types";
const { getProduct, getProductDetails, getProducts,  createProduct, deleteProduct, editProduct } =
  productService;

class ProductController {
  async getProduct(req: Request, res: Response) {
    console.log("paso controller getproduct");
    console.log(req.query);
    console.log(req.params.id);
    const { id } = req.query;
    try {
      const product = await getProduct(id as string);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  
  async getProductDetails(req: Request, res: Response) {
    console.log("paso controller");
    console.log(req.query);
    console.log(req.params.id);
    const { id } = req.query;
    try {
      const product = await getProductDetails(id as string);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getProducts(req: Request, res: Response) {
    const searchParams: ISearchParams = req.query;
  
    try {
      const products = await getProducts(searchParams);
      return res.status(200).json(products);

    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async createProduct(req: Request, res: Response) {
    const product = req.body;
    try {
      const newProduct = await createProduct(product);
      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.query;
    try {
      const deletedProduct = await deleteProduct(id as string);
      return res.status(200).json(deletedProduct);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async editProduct(req: Request, res: Response) {
    const { id } = req.query;
    const editedProductBody = req.body;
    console.log(req.query,req.body );
    try {
      const editedProduct = await editProduct(id as string, editedProductBody);
      return res.status(200).json(editedProduct);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export const productController = new ProductController();