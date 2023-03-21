import { Router } from "express";
import {
  createClientController,
  listClientsController,
} from "../controllers/clients.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middlware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { clientRequestSerializer } from "../serializers/client.serializers";

const clientRoutes = Router();

clientRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdminMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(clientRequestSerializer),
  createClientController
);

clientRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdminMiddleware,
  listClientsController
);

export default clientRoutes;
