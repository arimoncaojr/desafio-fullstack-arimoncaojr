import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";

interface IAuthContextProps {
  children: React.ReactNode;
}

interface IContactsInfo {
  id: string;
  fullName: string;
  telephone: string;
  email: string;
  createdAt: string;
}

interface IClientInfo {
  id: string;
  fullName: string;
  telephone: string;
  email: string;
  createdAt: string;
  contacts: IContactsInfo[];
}

export interface ILogin {
  email: string;
  password: string;
}

interface IAuthContext {
  clientInfo: IClientInfo;
  token: string | null;
  login: (user: ILogin) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProps) => {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("@desafioFullStack:Token");

  const [clientInfo, setClientInfo] = useState<IClientInfo>({} as IClientInfo);

  const login = (user: ILogin) => {
    Api.post("/users/login", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@desafioFullStack:Token", res.data.token);
        toast.success("Login bem sucedido!");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos!");
      });
  };

  useEffect(() => {
    token &&
      Api.get<IClientInfo>("/clients", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setClientInfo(res.data);
        })
        .catch((err) => {
          window.localStorage.clear();
          navigate("/login");
        });
  }, [token, navigate, clientInfo.contacts]);

  return (
    <AuthContext.Provider value={{ token, clientInfo, login }}>
      {children}
    </AuthContext.Provider>
  );
};
