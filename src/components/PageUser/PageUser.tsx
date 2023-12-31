import AuthComponent from "./authentication/AuthComponent";
import UserInfo from "./perfil/UserInfo";
import { useSelector } from "react-redux";
import { RootState } from "../../js/rudux/store";
import LogOutButton from "./perfil/LogOutButton";

export default function PageUser() {
  const auth = useSelector((state: RootState) => state.auth);
  const isLogged = auth.isLogged;

  return (
    <div className="h-auto  md:p-2">
      {isLogged ? <LogOutButton /> : null}
      {isLogged ? <UserInfo /> : <AuthComponent />}
    </div>
  );
}
