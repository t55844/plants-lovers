import { Favorite } from "@mui/icons-material";
import { useState } from "react";
import { Plant } from "./PagePlants";
import { useSelector } from "react-redux";
import { RootState } from "../../js/rudux/store";
import { getData, updateData } from "../../js/supabase/functions";
import { useDispatch } from "react-redux";
import { setUserData } from "../../js/rudux/authSlice";

const FavoriteButton = (props: { plant: Plant }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const { plant } = props;
  const favorites = auth.userData?.favorites;

  const handleToggleFavorite = async () => {
    const user = auth.userData;
    const newFavorites = favorites
      ?.filter((item) => item.id !== plant.id)
      .concat(plant);

    setIsFavorite(!isFavorite);
    const isUpdated = (await updateData(user?.email, "favorites", newFavorites))
      .error;

    const profile =
      isUpdated == null ? (await getData(user?.email)).profile : null;
    dispatch(setUserData(profile[0]));
  };

  return (
    <button
      className={`p-2 rounded-full w-10 m-auto ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
      }`}
      onClick={handleToggleFavorite}
    >
      <Favorite />
    </button>
  );
};

export default FavoriteButton;
