import "module-alias/register";
import e from "express";
import authRouter from "@/routes/auth.route";

const server = e();

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.use("/auth", authRouter);

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
