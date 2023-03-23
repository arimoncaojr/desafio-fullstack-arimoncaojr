import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import {
  IContactRequest,
  IContactUpdateRequest,
} from "../interfaces/contact.interfaces";

const createContactController = async (req: Request, res: Response) => {
  const contactData: IContactRequest = req.body;
  const newContact = await createContactService(contactData, req.user.id);

  return res.status(201).json(newContact);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactData: IContactUpdateRequest = req.body;
  const contactId: string = req.params.id;
  const userId: string = req.user.id;
  const updateContact = await updateContactService(
    contactData,
    contactId,
    userId
  );

  return res.status(200).json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const userId: string = req.user.id;

  await deleteContactService(contactId, userId);

  return res.status(204).send();
};

export {
  createContactController,
  updateContactController,
  deleteContactController,
};
