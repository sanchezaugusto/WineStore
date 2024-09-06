import Product from "./model";
import { IProduct } from "../../types";

class ProductDao {
  async getAllProducts(
    category?: string,
    salersId?: string,
    priceStart?: number,
    priceEnd?: number,
    sort?: -1 | 1 ,
    page: string = "1",
    limit: string = "10",
    keyword?: string,
  ) {

    const pageNumber = isNaN(Number(page)) ? 1 : Math.max(1, Number(page)); 
    const limitNumber = isNaN(Number(limit)) ? 10 : Math.max(1, Number(limit));
    const skip = (pageNumber - 1) * limitNumber;

    const filters: Record<string, any> = {};
    if (category) filters.category = category;
    if (salersId) filters.salersId = salersId;
    if (priceStart !== undefined && priceEnd !== undefined) {
      filters.price = { $gte: priceStart, $lte: priceEnd };
    }
    if (keyword) {
       filters.name = {$regex: keyword, $options: "i"}
    }; 


    const sortCriteria = sort ? { price: sort } : undefined;

    try {
      const products = await Product.find(filters)
        .sort(sortCriteria)
        .skip(skip)
        .limit(limitNumber);

      return products;
    } catch (error) {
      throw new Error(`Error fetching products: ${(error as Error).message}`);
    }
  }

  

  async getProductById(productId: string) {
    console.log(productId);
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async getProductDetailsById(productId: string) {
    console.log("paso dao");
    console.log(productId);
    try {
      const product = await Product.findById(productId,{
        _id: 0,
        name : 1,
        type : 1,
        price : 1
      });
      return product;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async createProduct(product: IProduct) {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async editProduct(productId: string, product: IProduct) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        product,
        { new: true }
      );
      return updatedProduct;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteProduct(productId: string) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      return deletedProduct;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const productDao = new ProductDao();
