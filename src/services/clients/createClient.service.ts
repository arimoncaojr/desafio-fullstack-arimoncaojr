import {
  IClientRequest,
  IClientResponse,
} from "../../interfaces/client.interfaces";
import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { clientResponseSerializer } from "../../serializers/client.serializers";

const createClientService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientExistByEmail = await clientRepository.findOneBy({
    email: clientData.email,
  });

  const clientExistByPhone = await clientRepository.findOneBy({
    telephone: clientData.telephone,
  });

  if (clientExistByEmail || clientExistByPhone) {
    throw new AppError("Client already exist!", 409);
  }

  const newClient = clientRepository.create(clientData);

  await clientRepository.save(newClient);

  const createdClientResponse = await clientResponseSerializer.validate(
    newClient,
    {
      stripUnknown: true,
    }
  );

  return createdClientResponse;
};

export default createClientService;
