import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IClientRequest,
  IClientResponse,
} from "../interfaces/client.interfaces";
import { contactResponseSerializer } from "./contact.serializers";

const clientRequestSerializer: SchemaOf<IClientRequest> = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
});

const clientResponseSerializer: SchemaOf<IClientResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  fullName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().notRequired(),
  createdAt: yup.string().notRequired(),
  contacts: yup.array(contactResponseSerializer),
});

const allClientesSerializer: SchemaOf<IClientResponse[]> = yup.array(
  clientResponseSerializer
);

export {
  clientRequestSerializer,
  clientResponseSerializer,
  allClientesSerializer,
};
