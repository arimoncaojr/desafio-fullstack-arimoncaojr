import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContactRequest,
  IContactResponse,
} from "../interfaces/contact.interfaces";

const contactRequestSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  fullName: yup.string().max(200).required(),
  email: yup.string().email().max(100).required(),
  telephone: yup.string().max(11).required(),
  clientId: yup.string().required(),
});

const contactResponseSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    fullName: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
    createdAt: yup.string().notRequired(),
    clientId: yup.string().notRequired(),
  });

export { contactRequestSerializer, contactResponseSerializer };
