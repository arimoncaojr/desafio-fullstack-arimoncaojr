import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import Contact from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import {
  IContactRequest,
  IContactResponse,
} from "../../interfaces/contact.interfaces";
import { contactResponseSerializer } from "../../serializers/contact.serializers";

const createContactService = async (
  contactData: IContactRequest,
  idClient: string
): Promise<IContactResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: idClient,
  });

  if (!client) {
    throw new AppError("Client don't exists!", 404);
  }

  const contactRepository = AppDataSource.getRepository(Contact);

  const foundContactByEmail = await contactRepository.findOne({
    where: {
      email: contactData.email,
      client: client,
    },
  });

  const foundContactByPhone = await contactRepository.findOne({
    where: {
      telephone: contactData.telephone,
      client: client,
    },
  });

  if (foundContactByEmail || foundContactByPhone) {
    throw new AppError("Contact already exists in this Client!", 409);
  }

  const createContact = contactRepository.create({
    ...contactData,
    client: client,
  });

  await contactRepository.save(createContact);

  const createdContactResponse = await contactResponseSerializer.validate(
    createContact,
    { stripUnknown: true }
  );

  return createdContactResponse;
};

export default createContactService;
