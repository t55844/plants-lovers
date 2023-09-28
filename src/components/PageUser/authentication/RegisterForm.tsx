import { useForm } from "react-hook-form";
import ButtonGener from "../../HandlersComponent/ButtonGener";
import InputFormGener from "./InputFormGener";
import RequisitionResponseBox from "../../HandlersComponent/RequisitionResponseBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginRegisterRequisition } from "./authentication";
import { getData, saveProfile } from "../../../js/supabase/functions";
import { setUserData } from "../../../js/rudux/authSlice";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
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
          imgProfile: "",
          favorites: [],
        });

    const profile = !isRegistered ? null : (await getData(data.email)).profile;

    profile == null ? null : dispatch(setUserData(profile[0]));
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <InputFormGener
        label="Email"
        nameId="email"
        type="email"
        placeholder="email@mail.com"
        register={register("email", { required: "Email is required" })}
        errors={errors}
      />

      <InputFormGener
        label="Password"
        nameId="password"
        type="password"
        placeholder="123456"
        register={register("password", {
          required: "Password is required ",
          minLength: { message: "length min 6", value: 6 },
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
