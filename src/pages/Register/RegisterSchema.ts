import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Geçersiz Email").required("Zorunlu"),
  password: Yup.string().required("Zorunlu").min(8, "Çok kısa"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Parolalar uyuşmuyor."
  ),
});

export default RegisterSchema;
