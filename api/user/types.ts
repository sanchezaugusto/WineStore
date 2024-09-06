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
