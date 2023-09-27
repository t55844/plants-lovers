import { useSelector } from "react-redux";
import { RootState } from "../../../js/rudux/store";
import PlantCard from "../../PagePlants/PlantCard";

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
      <div className="w-full ">
        <h3 className="text-lg font-semibold w-28 md:m-auto">Favorites</h3>
        <ul className="flex flex-row justify-around flex-wrap items-center">
          {user.favorites.map((favorite, index) => (
            <div className="w-11/12 md:w-1/4 md:m-2">
              <PlantCard plant={favorite} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
