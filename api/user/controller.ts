import { Request, Response } from "express";
import { userService } from "./service";
import User from "./model";


const { getUser, getUsers, createUser, loginUser } = userService;

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: "Users not found" });
    }
  }
  async getUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await getUser(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const token = await loginUser(req.body);
      return res.header("authtoken", token).status(200).json("Login successful");
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }


  async deleteUser(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  

  async editUser(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
}

export const userController = new UserController();
