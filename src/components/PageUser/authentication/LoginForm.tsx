import { useForm } from "react-hook-form";
import { useState } from "react";
import ButtonGener from "../../HandlersComponent/ButtonGener";
import InputFormGener from "./InputFormGener";
import RequisitionResponseBox from "../../HandlersComponent/RequisitionResponseBox";
import { useDispatch } from "react-redux";
import { handleLoginRegisterRequisition } from "./authentication";

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

  const handleLogin = (data: any) =>
    handleLoginRegisterRequisition(
      data,
      true,
      [
        "can't login because password or email is invalid",
        `you is authenticate with success`,
      ],
      dispatch,
      setResponseStatus
    );

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
