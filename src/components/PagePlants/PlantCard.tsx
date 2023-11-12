import { Plant } from "./PagePlants";

interface PlantCardProps {
  plant: Plant;
}

export const cycles = [
  ["Perennial", "Perene"],
  ["Annual", "Anual"],
  ["Biennial", "Bienal"],
  ["Biannual", "Bianual"],
];

export const watering = [
  ["Frequent", "Frequente"],
  ["Average", "Médio"],
  ["Minimum", "Mínimo"],
  ["None", "Nenhum"],
];

export const sunlight = [
  ["Full Shadow", "Sombra Total"],
  ["Part Shade", "Sombra Parcial"],
  ["Sun-Part Shade", "Meia Sombra"],
  ["Full Sun", "Sol Pleno"],
];

function translateInfo(data: string, traductionTuple: string[][]): string {
  if (data.length > 15 && !Array.isArray(data)) return "";
  console.log(data);
  console.log(traductionTuple);
  if (Array.isArray(data)) {
    const translation: string[] = [];
    data.forEach((oneData) =>
      traductionTuple.forEach((tuple) => {
        if (oneData.toLowerCase() == tuple[0].toLowerCase()) {
          translation.push(tuple[1]);
        }
      })
    );
    return translation.join(" - ");
  }

  const translation = traductionTuple.filter((tuple) => tuple[0] == data)[0][1];
  return translation;
}

//this component receives an object from the array of plants and assembles a card with information about
export default function PlantCard(props: PlantCardProps) {
  const { plant } = props;

  const imgSrc = () => {
    //check all urls to find one that is working
    return plant.default_image &&
      typeof plant.default_image.original_url == "string"
      ? plant.default_image.original_url
      : plant.default_image &&
        typeof plant.default_image.regular_url == "string"
      ? plant.default_image.regular_url
      : plant.default_image && typeof plant.default_image.small_url == "string"
      ? plant.default_image.small_url
      : plant.default_image && typeof plant.default_image.medium_url == "string"
      ? plant.default_image.medium_url
      : "";
  };

  return (
    <div className="w-full m-4 ">
      <div key={plant.id} className="bg-white rounded-lg shadow-md p-4">
        <img
          src={imgSrc()}
          alt={plant.common_name}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <h3 className="text-lg font-bold mb-2">{plant.common_name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plant.scientific_name}</p>
        <p className="text-gray-800 text-sm ">
          {"# " + translateInfo(plant.sunlight, sunlight)}
        </p>
        <p className="text-gray-800 text-sm ">
          {"# " + translateInfo(plant.watering, watering)}
        </p>
        <p className="text-gray-800 text-sm ">
          {"# " + translateInfo(plant.cycle, cycles)}
        </p>
      </div>
    </div>
  );
}
