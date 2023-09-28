import Perfil from "./Perfil";
import SectionFavorites from "./SectionFavorites";
import { useSelector } from "react-redux";
import { RootState } from "../../../js/rudux/store";
import ImgPerfil from "./ImgPerfil";

export default function UserInfo() {
  const auth = useSelector((state: RootState) => state.auth);
  const user =
    auth.token !== null && auth.userData !== null
      ? {
          name: auth.userData?.email.match(/^(.*?)@/)[1],
          email: auth.userData?.email,
          favorites: auth.userData?.favorites,
        }
      : { name: "", email: "", favorites: [], comments: [] };
  return (
    <div className="flex flex-wrap ">
      <div className="p-2 w-full md:h-1/2 md:w-1/4 flex border rounded-lg bg-lime-200  md:flex-col items-center justify-around md:justify-start">
        <ImgPerfil />
        <Perfil user={user} />
      </div>
      <SectionFavorites user={user} />
    </div>
  );
}
