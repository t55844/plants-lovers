import PlantCard from "./PlantCard";
import { Plant } from "./PagePlants";
import FavoriteButton from "./FavoriteButton";
import { useSelector } from "react-redux";
import { RootState } from "../../js/rudux/store";

export default function PlantsList(props: { plants: Plant[] }) {
  const { plants } = props;
  const auth = useSelector((state: RootState) => state.auth);
  const isLogued = auth.isLogged;
  return (
    <div className="flex flex-row justify-around items-center flex-wrap">
      {plants && plants.length
        ? plants.map((plant) => (
            <div
              className="w-11/12 md:w-1/4 md:m-2 flex flex-col flex-wrap items-center"
              key={Math.random()}
            >
              <PlantCard key={Math.random()} plant={plant} />
              {isLogued ? (
                <FavoriteButton key={Math.random()} plant={plant} />
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}
