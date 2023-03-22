import { Router } from "express";
import { createContactController } from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { contactRequestSerializer } from "../serializers/contact.serializers";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(contactRequestSerializer),
  createContactController
);

export default contactRoutes;
