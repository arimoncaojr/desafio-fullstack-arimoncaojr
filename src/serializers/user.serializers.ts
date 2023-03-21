import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserLogin,
} from "../interfaces/user.interfaces";

const userRequestSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  username: yup.string().max(50).required(),
  email: yup.string().email().max(50).required(),
  password: yup.string().max(120).required(),
  isAdm: yup.boolean().notRequired(),
});

const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  username: yup.string().notRequired(),
  email: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
});

const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

export { userRequestSerializer, userResponseSerializer, userLoginSerializer };
