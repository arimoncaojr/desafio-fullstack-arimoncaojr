import {
  IContactResponse,
  IContactUpdateRequest,
} from "../../interfaces/contact.interfaces";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { contactResponseSerializer } from "../../serializers/contact.serializers";
import { AppError } from "../../errors/AppError";

const updateContactService = async (
  contactData: IContactUpdateRequest,
  contactId: string,
  userId: string
): Promise<IContactResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("Client don't exists!", 404);
  }

  const contactRepository = AppDataSource.getRepository(Contact);
  const foundContactByParam = await contactRepository.findOne({
    where: {
      id: contactId,
      user: { id: userId },
    },
  });

  if (!foundContactByParam) {
    throw new AppError("Contact not found!", 404);
  }

  const { fullName, email, telephone } = contactData;

  if (!fullName && !email && !telephone) {
    throw new AppError(
      "You don't have authorization to change this fields",
      403
    );
  }

  const updateContact = contactRepository.create({
    ...foundContactByParam,
    fullName: fullName || foundContactByParam.fullName,
    email: email || foundContactByParam.email,
    telephone: telephone || foundContactByParam.telephone,
  });

  await contactRepository.save(updateContact);

  const contactResponse = await contactResponseSerializer.validate(
    updateContact,
    {
      stripUnknown: true,
    }
  );

  return contactResponse;
};

export default updateContactService;
