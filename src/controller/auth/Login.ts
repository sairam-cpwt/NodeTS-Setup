import { Request, Response } from "express";

export default function Login(req: Request, res: Response) {
  res.status(200).json({ message: "Login endpoint hit" });
}
