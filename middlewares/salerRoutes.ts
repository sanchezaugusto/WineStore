import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "dotenv";
config();

export function salerRoutes(req: Request, res: Response, next: Function) {
  const token = req.header("authtoken");
  if (!token) return res.status(401).json("Access denied");

  try {
    
    const verified = verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      role: string;
    };

    if (!verified)
      return res
        .status(401)
        .json("You need to be logged in to access this route");

    
    const { userId, role } = verified;

    
    const isVendor = role === "vendedor";
    
    if (!isVendor) {
      return res.status(403).json("Access denied. You need to be a 'vendor' to access this route.");
    }

    
    req.body.user_id = userId;
    
    
    next();
    
  } catch (error) {
    res.status(400).json("Invalid token");
  }
}

