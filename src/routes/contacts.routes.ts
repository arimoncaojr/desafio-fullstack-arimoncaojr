import { Router } from "express";
import { createContactController } from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middlware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { contactRequestSerializer } from "../serializers/contact.serializers";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdminMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(contactRequestSerializer),
  createContactController
);

export default contactRoutes;
