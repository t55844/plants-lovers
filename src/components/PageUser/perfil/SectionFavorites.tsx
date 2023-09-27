import { DeleteSweep } from "@mui/icons-material";
import PlantCard from "../../PagePlants/PlantCard";
import { Plant } from "../../PagePlants/PagePlants";
import FavoriteButton from "../../PagePlants/FavoriteButton";

export default function SectionFavorites(props: { user: any }) {
  const { user } = props;
  return (
    <div className="w-full ">
      <h3 className="text-lg font-semibold w-28 md:m-auto">Favorites</h3>
      <ul className="flex flex-row justify-around flex-wrap items-center">
        {user.favorites.map((favorite) => (
          <div className="w-11/12 md:w-1/4 md:m-2 flex flex-col flex-wrap items-center">
            <PlantCard plant={favorite} />
            <FavoriteButton plant={favorite} isUnfavorite={true} />
          </div>
        ))}
      </ul>
    </div>
  );
}
