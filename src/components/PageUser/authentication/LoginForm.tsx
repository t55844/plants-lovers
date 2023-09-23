import { useForm } from "react-hook-form";
import { useState } from "react";
import ButtonGener from "../../HandlersComponent/ButtonGener";
import supabase from "../../../js/supabase";
import InputFormGener from "./InputFormGener";
import RequisitionResponseBox from "../../HandlersComponent/RequisitionResponseBox";
import { useDispatch } from "react-redux";
import { setToken } from "../../../js/rudux/authSlice";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const dispatch = useDispatch();

  const [responseStatus, setResponseStatus] = useState<{
    err: boolean;
    show: boolean;
    loding: boolean;
    text: string;
  }>({ err: false, show: false, loding: false, text: "" });

  const handleLogin = async (data: { email: string; password: string }) => {
    // Handle login logic here
    try {
      setResponseStatus({ err: false, show: true, loding: true, text: "" });
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setResponseStatus({
          err: true,
          show: true,
          loding: false,
          text: "can't login because password or email is invalid",
        });
      } else {
        dispatch(setToken(session));

        setResponseStatus({
          show: true,
          err: false,
          loding: false,
          text: `${user?.email} is authenticate with success`,
        });
        // You can redirect the user or perform other actions on successful login
      }
    } catch (error) {
      setResponseStatus({
        err: true,
        show: true,
        loding: false,
        text: "can't login because password or email is invalid",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <InputFormGener
        label="Email"
        nameId="email"
        type="email"
        errors={errors}
        register={register("email", { required: "Email is required" })}
      />

      <InputFormGener
        label="Password"
        nameId="password"
        type="password"
        register={register("password", { required: "Password is required" })}
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
        setAction={() => {}}
        title="Login"
      />
    </form>
  );
}
