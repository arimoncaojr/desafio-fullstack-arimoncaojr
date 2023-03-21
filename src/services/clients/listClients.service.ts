import AppDataSource from "../../data-source";
import { IClientResponse } from "../../interfaces/client.interfaces";
import Client from "../../entities/client.entity";
import { allClientesSerializer } from "../../serializers/client.serializers";

const listClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const allCliensResponse = allClientesSerializer.validate(clients, {
    stripUnknown: true,
  });

  return allCliensResponse;
};

export default listClientsService;
