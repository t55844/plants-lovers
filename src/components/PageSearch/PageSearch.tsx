import { useEffect, useState } from "react";
import FilterBox from "./FilterBox";
import { Plant } from "../PagePlants/PagePlants";
import PlantsList from "../PagePlants/Plantlist";
import { getPlantsInfos } from "../PagePlants/requestHandler";
import Modal from "../HandlersComponent/Modal";
import SearchBar from "./SearchBar";

export default function PageSearch() {
  const [url, setUrl] = useState<string>("");
  const [plants, setPlants] = useState<Plant[]>([]);

  async function searchPlantsInfo(url: string): Promise<Plant[]> {
    //make the request with the filter

    //but if no hass filters then get from the localStorage
    if (url === "") {
      getPlantsInfos().then((plants) => setPlants(plants));
    }
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
  }

  useEffect(() => {
    console.log(url);
    searchPlantsInfo(url).then((plants) => {
      console.log(plants);
      setPlants(plants);
    });
  }, [url]);
  return (
    <div className="h-auto">
      <h2 className="text-teal-400 text-xl mx-auto text-center my-3 border-b-4 border-teal-700 md:w-1/2">
        Pagina de Pesquisa
      </h2>
      <SearchBar getInputData={setUrl} />
      <Modal children={<FilterBox returnUrl={setUrl} />} buttonTitle="Filtro" />
      <PlantsList plants={plants} />
    </div>
  );
}
