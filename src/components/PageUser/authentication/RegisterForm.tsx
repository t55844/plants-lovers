import { useForm } from "react-hook-form";
import ButtonGener from "../../HandlersComponent/ButtonGener";
import supabase from "../../../js/supabase"; // Import the Supabase client you initialized
import InputFormGener from "./InputFormGener";
import RequisitionResponseBox from "../../HandlersComponent/RequisitionResponseBox";
import { useState } from "react";
import { setToken } from "../../../js/rudux/authSlice";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>();

  const dispatch = useDispatch();

  const [responseStatus, setResponseStatus] = useState<{
    err: boolean;
    show: boolean;
    loding: boolean;
    text: string;
  }>({ err: false, show: false, loding: false, text: "" });

  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Handle registration logic here
    console.log(data);
    try {
      setResponseStatus({ err: false, show: true, loding: true, text: "" });
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setResponseStatus({
          err: true,
          show: true,
          loding: false,
          text: "can't register: " + error.message,
        });
      } else {
        dispatch(setToken(session));

        setResponseStatus({
          err: false,
          show: true,
          loding: false,
          text: "Register with success, user:" + user?.email,
        });

        // You can redirect the user or perform other actions on successful registration
      }
    } catch (error) {
      setResponseStatus({
        err: true,
        show: true,
        loding: false,
        text: "can't register: " + error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <InputFormGener
        label="Email"
        nameId="email"
        type="email"
        register={register("email", { required: "Email is required" })}
        errors={errors}
      />

      <InputFormGener
        label="Password"
        nameId="password"
        type="password"
        register={register("password", { required: "Password is required" })}
        errors={errors}
      />

      <InputFormGener
        label="Confirm password"
        nameId="confirmPassword"
        type="password"
        register={register("confirmPassword", {
          required: "Confirm password is required",
        })}
        errors={errors}
      />
      <RequisitionResponseBox
        toShow={responseStatus.show}
        loading={responseStatus.loding}
        error={responseStatus.err}
        text={responseStatus.text}
      />
      <ButtonGener
        width="w-full"
        type="submit"
        title="Register"
        setAction={() => {}}
      />
    </form>
  );
}
