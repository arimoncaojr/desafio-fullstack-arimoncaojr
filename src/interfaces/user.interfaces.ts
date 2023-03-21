export interface IUserRequest {
  username: string;
  email: string;
  password: string;
  isAdm?: boolean;
}

export interface IUserResponse {
  id: string;
  username: string;
  email: string;
  isAdm: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}
