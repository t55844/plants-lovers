import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setToken } from "../../../js/rudux/authSlice";
import supabase from "../../../js/supabase/supabase";
import { saveData } from "../../../js/supabase/functions";


interface registerUserData{
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

interface userDataToSaveOnTable{
  email: string;
  name: string;
}

export const handleLoginRegisterRequisition = async (
    data: registerUserData,
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
  ):Promise<boolean> => {
    // Handle login logic here
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
        return false;
      } else {
        dispatch(setToken(session));

        setResponseStatus({
          show: true,
          err: false,
          loding: false,
          text: menssages[1],
        });

        return true;
      }
    } catch (error) {
      setResponseStatus({
        err: true,
        show: true,
        loding: false,
        text: menssages[0],
      });
      return false;
    }
  };

