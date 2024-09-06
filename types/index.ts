type UserRole = "admin" | "comprador" | "vendedor" | undefined;

export interface IUser {
  _id: string | undefined;
  firts_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  role: UserRole;
  avatar: string | undefined;
}

export interface IProduct {
  _id: string | undefined;
  name: string;
  type: string;
  grape: string;
  winery: {
    name: string;
    location: string;
  };
  year: number;
  alcoholContent: number;
  bottleSize: string;
  price: number;
  description?: string;
  stock: number;
  category?: string;  
  image?: string;
  user_id: string;   
}


export interface ICart {
  products: { _id: string; quantity: number }[];
  totalPrice: number;
}
