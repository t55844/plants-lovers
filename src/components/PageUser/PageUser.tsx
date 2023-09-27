import AuthComponent from "./authentication/AuthComponent";
import UserInfo from "./perfil/UserInfo";
import { useSelector } from "react-redux";
import { RootState } from "../../js/rudux/store";
import LogOutButton from "./perfil/LogOutButton";

export default function PageUser() {
  const auth = useSelector((state: RootState) => state.auth);
  const isLogged = auth.isLogged;
  console.log(auth);

  return (
    <div className="h-auto md:h-screen p-2">
      <LogOutButton />
      {isLogged ? <UserInfo /> : <AuthComponent />}
    </div>
  );
}
