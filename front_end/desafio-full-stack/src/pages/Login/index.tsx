import { useContext } from "react";
import { AuthContext, ILogin } from "../../contexts/AuthContext";
import { schema } from "../../lib/yupLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate } from "react-router-dom";
import { Container, TitlePage, Form, Label, Span } from "../../styles";
import { ModalRegister } from "../../components/ModalRegister";

export const LoginPage = () => {
  const { token, login, showModalRegister, setShowModalRegister } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  return (
    <>
      {!token ? (
        <Container>
          <TitlePage>Painel do Cliente</TitlePage>
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
            <Span>Ainda não tem uma conta?</Span>
            <button
              type="button"
              onClick={() => {
                setShowModalRegister(true);
              }}
            >
              Cadastre-se
            </button>
          </Form>
          {showModalRegister && <ModalRegister />}
        </Container>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};
