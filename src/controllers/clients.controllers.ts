import { Request, Response } from "express";
import { IClientRequest } from "../interfaces/client.interfaces";
import createClientService from "../services/clients/createClient.service";
import listClientsService from "../services/clients/listClients.service";

const createClientController = async (req: Request, res: Response) => {
  const client: IClientRequest = req.body;
  const newClient = await createClientService(client);

  return res.status(201).json(newClient);
};

const listClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();

  return res.status(200).json(clients);
};

export { createClientController, listClientsController };
