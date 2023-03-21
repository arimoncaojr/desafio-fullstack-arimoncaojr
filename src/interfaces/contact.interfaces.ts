export interface IContactRequest {
  fullName: string;
  email: string;
  telephone: string;
  clientId: string;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string;
  clientId: string;
}
