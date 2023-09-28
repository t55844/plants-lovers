import PlantCard from "../../PagePlants/PlantCard";
import FavoriteButton from "../../PagePlants/FavoriteButton";

export default function SectionFavorites(props: { user: any }) {
  const { user } = props;
  return (
    <div className="w-full md:w-3/4">
      <h3 className="text-teal-400 text-xl mx-auto text-center my-3 border-b-4 border-teal-700 md:w-1/2">
        Favorites
      </h3>
      <ul className="flex flex-row justify-around flex-wrap items-center">
        {user.favorites.map((favorite) => (
          <div
            key={Math.random()}
            className="w-11/12 md:w-2/5 lg:w-1/4 md:m-2 flex flex-col flex-wrap items-center"
          >
            <PlantCard plant={favorite} />
            <FavoriteButton plant={favorite} isUnfavorite={true} />
          </div>
        ))}
      </ul>
    </div>
  );
}
