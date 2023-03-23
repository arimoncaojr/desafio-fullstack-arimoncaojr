import { Request, Response } from "express";
import {
  IUserRequest,
  IUserLogin,
  IUserUpdateRequest,
} from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";
import loginUserService from "../services/users/loginUser.service";
import listUserByIdService from "../services/users/listUserById.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

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

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdateRequest = req.body;
  const userId = req.params.id;
  const updateUser = await updateUserService(userData, userId);

  return res.status(200).json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  await deleteUserService(userId);

  return res.status(204).send();
};
export {
  createUserController,
  loginUserController,
  listUserByIdController,
  updateUserController,
  deleteUserController,
};
