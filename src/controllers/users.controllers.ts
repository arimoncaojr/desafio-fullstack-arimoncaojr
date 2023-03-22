import { Request, Response } from "express";
import { IUserRequest, IUserLogin } from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";
import loginUserService from "../services/users/loginUser.service";
import listUserByIdService from "../services/users/listUserById.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const loginUserController = async (req: Request, res: Response) => {
  const userData: IUserLogin = req.body;
  const token = await loginUserService(userData);

  return res.status(200).json({ token });
};

const listUserByIdController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const userAuth: string = req.user.id;
  const user = await listUserByIdService(userId, userAuth);

  return res.status(200).json(user);
};

export { createUserController, loginUserController, listUserByIdController };
