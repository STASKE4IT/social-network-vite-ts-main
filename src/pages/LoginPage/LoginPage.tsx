import { Link } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormSchema = yup.object({
  userEmail: yup.string().required("SALAM ALEYKUM E, заполнить надо"),
  userPassword: yup
    .string()
    .required("E SALAM ALEYKUM E, заполнить надо")
    .min(8, "SALAM ALEYKUM E, надо не менее 8 символов"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { userEmail: "", userPassword: "" },
  });

  const onLoginForSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <SCLoginPage>
      <AppHeading headingText={"Авторизация"} headingType={"h1"} />
      <form onSubmit={handleSubmit(onLoginForSubmit)}>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput type={"email"} placeholder={"E-Mail"} {...field} />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput type={"password"} placeholder={"Пароль"} {...field} />
          )}
        />
        <AppButton buttonText={"Войти"} type={"button"} />
      </form>
      <Link to="#">Забыли пароль?</Link>
      <div className="registration">
        <span>
          У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
        </span>
        <p>Войти с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
