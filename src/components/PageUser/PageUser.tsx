import AuthComponent from "./authentication/AuthComponent";
import UserInfo from "./perfil/UserInfo";

export default function PageUser() {
  return (
    <div className="h-auto md:h-screen">
      <h1>PageUser</h1>
      <UserInfo />
      <AuthComponent />
    </div>
  );
}
