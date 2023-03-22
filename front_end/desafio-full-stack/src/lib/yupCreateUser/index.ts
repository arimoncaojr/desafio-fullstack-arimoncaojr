import * as yup from "yup";

export const schema = yup.object({
  fullName: yup.string().required("Nome não preenchido"),
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  password: yup
    .string()
    .required("Senha não preenchida")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[$*&@#()!`'<>"~/?}[_{|;:=+^%,.}])[0-9a-zA-Z$*&@#`()!`'<>_"~/?}{|;:[=+^%,.}]{8,}$/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),
  confirmPass: yup.string().oneOf([yup.ref("password")], "Senha não é igual"),
  telephone: yup.string().required("Telefone não preenchido"),
});
