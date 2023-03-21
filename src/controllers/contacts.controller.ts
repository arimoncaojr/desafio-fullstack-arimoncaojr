import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import { IContactRequest } from "../interfaces/contact.interfaces";

const createContactController = async (req: Request, res: Response) => {
  const contactData: IContactRequest = req.body;
  const newContact = await createContactService(
    contactData,
    contactData.clientId
  );

  return res.status(201).json(newContact);
};

export { createContactController };
