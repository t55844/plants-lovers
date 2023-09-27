import { useForm } from "react-hook-form";
import ButtonGener from "../../HandlersComponent/ButtonGener";
import InputFormGener from "./InputFormGener";
import RequisitionResponseBox from "../../HandlersComponent/RequisitionResponseBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginRegisterRequisition } from "./authentication";
import { saveProfile } from "../../../js/supabase/functions";

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

  const handleRegister = async (data: any) => {
    const isRegistered = await handleLoginRegisterRequisition(
      data,
      false,
      [
        "can't register, tray with outher email or go back later ",
        `Register with success!!!`,
      ],
      dispatch,
      setResponseStatus
    );

    !isRegistered
      ? null
      : await saveProfile({
          email: data.email,
          imgProfile: "bloblobloblobloblobloblobloblobl",
          favorites: [],
        });
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
