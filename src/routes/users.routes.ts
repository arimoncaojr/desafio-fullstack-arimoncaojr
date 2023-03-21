import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import {
  userLoginSerializer,
  userRequestSerializer,
} from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "/login",
  ensureDataIsValidMiddleware(userLoginSerializer),
  loginUserController
);

userRoutes.post(
  "",
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(userRequestSerializer),
  createUserController
);

export default userRoutes;
