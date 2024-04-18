import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "../LoginPage/LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegistrationForm {
  userName: string;
  userEmail: string;
  userPhoneNumber: number;
  userPassword: string;
  userCity: string;
}

const registrationFormSchema = yup.object({
  userName: yup.string().required("Введите имя"),
  userEmail: yup.string().required("SALAM ALEYKUM E, заполнить надо"),
  userPhoneNumber: yup.number().required("Заполните поле"),
  userPassword: yup
    .string()
    .required("E SALAM ALEYKUM E, заполнить надо")
    .min(8, "SALAM ALEYKUM E, надо не менее 8 символов"),
  userCity: yup.string().required("Укажите город"),
});


export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userPassword: "",
      userCity: "",
    },
  });

  const navigate = useNavigate()

  const onLoginForSubmit: SubmitHandler<IRegistrationForm> = (data) => {
data ? navigate ("/main") : ("/")  };
  return (
    <SCLoginPage>
      <AppHeading headingText={"Регистрация"} headingType={"h1"} />
      <form onSubmit={handleSubmit(onLoginForSubmit)}>
        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <AppInput
              type={"text"}
              isError={errors.userName ? true : false}
              errorMessage={errors.userName?.message}
              placeholder={"Введите имя"}
              {...field}
            />
          )}
        />
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              type={"email"}
              isError={errors.userEmail ? true : false}
              errorMessage={errors.userEmail?.message}
              placeholder={"E-Mail"}
              {...field}
            />
          )}
        />
        <Controller
          name="userPhoneNumber"
          control={control}
          render={({ field }) => (
            <AppInput
              type={"number"}
              isError={errors.userPhoneNumber ? true : false}
              errorMessage={errors.userPhoneNumber?.message}
              placeholder={"Введите номер телефоа"}
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              type={"text"}
              isError={errors.userPassword ? true : false}
              errorMessage={errors.userPassword?.message}
              placeholder={"Введите пароль"}
              {...field}
            />
          )}
        />
        <Controller
          name="userCity"
          control={control}
          render={({ field }) => (
            <AppInput
              type={"text"}
              isError={errors.userCity ? true : false}
              errorMessage={errors.userCity?.message}
              placeholder={"Введите город"}
              {...field}
            />
          )}
        />
        <AppButton buttonText={"Зарегистрироваться"} type={"submit"} />
      </form>
      <div className="registration">
        <span>
          Уже есть аккаунт? <Link to="/">Войти</Link>
        </span>
        <p>Регистрация с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
