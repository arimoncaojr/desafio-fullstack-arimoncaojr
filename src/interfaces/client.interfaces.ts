import { IContactResponse } from "./contact.interfaces";

export interface IClientRequest {
  fullName: string;
  email: string;
  telephone: string;
}

export interface IClientResponse {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string;
  contacts: Array<IContactResponse> | [];
}

// export interface IClientNameAndId {
//   id: string;
//   fullName: string;
// }
