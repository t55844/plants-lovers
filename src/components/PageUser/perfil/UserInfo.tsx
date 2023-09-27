import { useSelector } from "react-redux";
import { RootState } from "../../../js/rudux/store";
import SectionFavorites from "./SectionFavorites";

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
    <>
      <div className="bg-lime-200 p-4 rounded-lg md:w-2/3 md:m-auto ">
        <h2 className="text-xl font-semibold">User Information</h2>
        <div className="mt-4">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <SectionFavorites user={user} />
    </>
  );
}
