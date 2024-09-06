import { IUser } from "./types";
import { userDao } from "./dao";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";

config();

const {
  getAllUsers,
  getUserById,
  getUserByMail,
  createUser,
  editUser,
  deleteUser,
} = userDao;

class UserService {
  async getUser(id: string) {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getUsers() {
    try {
      const users = await getAllUsers();
      return users;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  
  async createUser(user: IUser) {
    try {
      const newUser = await createUser(user);
      return newUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async loginUser(user: { email: string; password: string }) {
    try {
      const { email, password } = user;
      const existingUser = await getUserByMail(email);
      if (!existingUser) {
        throw new Error("Invalid email");
      }
      const isPasswordValid = await compare(password, existingUser.password!);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const token = sign(
        {
          userId: existingUser._id,
          email: existingUser.email,
          role: existingUser.role,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );

      return token;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export const userService = new UserService();
