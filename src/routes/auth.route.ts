import Login from "@/controller/auth/Login";
import e from "express";

const authRouter = e.Router();

authRouter.post("/login", Login);

export default authRouter;
