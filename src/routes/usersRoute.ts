// 3001
import { Router } from "express";
import { getUser, addUser } from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/:id", getUser);
usersRouter.post("/addUser", addUser);

export default usersRouter;
