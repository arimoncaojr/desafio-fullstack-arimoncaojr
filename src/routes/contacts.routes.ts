import { Router } from "express";
import {
  createContactController,
  updateContactController,
  deleteContactController,
} from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  contactRequestSerializer,
  contactUpdateSerializer,
} from "../serializers/contact.serializers";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(contactRequestSerializer),
  createContactController
);

contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  updateContactController
);

contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export default contactRoutes;
