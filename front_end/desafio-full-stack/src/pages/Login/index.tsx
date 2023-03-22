import { useContext } from "react";
import { AuthContext, ILogin } from "../../contexts/AuthContext";
import { schema } from "../../lib/yupLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate } from "react-router-dom";
import { Container, TitlePage, Form, Label } from "../../styles";

export const LoginPage = () => {
  const { token, login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  return (
    <>
      {!token ? (
        <Container>
          <TitlePage>Painel Administrativo</TitlePage>
          <Form onSubmit={handleSubmit(login)}>
            <h2>Login</h2>
            <div>
              <Label htmlFor="email" colorText={errors.email ? "red" : "black"}>
                {errors.email ? errors.email.message : "Email"}
              </Label>
              <input
                id="email"
                placeholder="Digite seu Email"
                {...register("email")}
              />
              <Label
                htmlFor="password"
                colorText={errors.password ? "red" : "black"}
              >
                {errors.password ? errors.password.message : "Senha"}
              </Label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua Senha"
                {...register("password")}
              />
            </div>
            <button type="submit">Entrar</button>
          </Form>
        </Container>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};
