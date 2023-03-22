import { Router } from "express";
import {
  createUserController,
  loginUserController,
  listUserByIdController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureUserLoggedMiddleWare from "../middlewares/ensureUserLogged.middleware";
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

userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUserLoggedMiddleWare,
  listUserByIdController
);

export default userRoutes;
