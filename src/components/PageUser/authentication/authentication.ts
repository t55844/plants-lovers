import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setToken } from "../../../js/rudux/authSlice";
import supabase from "../../../js/supabase";


interface registerUserData{
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const handleLoginRegisterRequisition = async (
    data: any,
    login:boolean,
    menssages: [string, string],
    dispatch:Dispatch<AnyAction>,
    setResponseStatus: React.Dispatch<
      React.SetStateAction<{
        err: boolean;
        show: boolean;
        loding: boolean;
        text: string;
      }>
    >
  ) => {
    // Handle login logic here
    console.log(data)
    try {
      setResponseStatus({ err: false, show: true, loding: true, text: "" });
      const {
        data: { user, session },
        error,
      } = await supabase.auth[`${login?'signInWithPassword':'signUp'}`]({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setResponseStatus({
          err: true,
          show: true,
          loding: false,
          text: menssages[0],
        });
      } else {
        dispatch(setToken(session));

        setResponseStatus({
          show: true,
          err: false,
          loding: false,
          text: menssages[1],
        });
        // You can redirect the user or perform other actions on successful login
      }
    } catch (error) {
      setResponseStatus({
        err: true,
        show: true,
        loding: false,
        text: menssages[0],
      });
    }
  };

  