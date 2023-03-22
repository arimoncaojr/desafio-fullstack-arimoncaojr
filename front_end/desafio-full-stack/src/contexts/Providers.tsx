import { AuthProvider } from "./AuthContext";

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
