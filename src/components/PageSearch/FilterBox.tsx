import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";
import { cycles, sunlight, watering } from "../PagePlants/PlantCard";

const apiKey = import.meta.env.VITE_PLANTS_KEY;
const allOptions = ["Sim", "Não"];

const initialFilters = {
  edible: "",
  poisonous: "",
  cycle: "",
  watering: "",
  sunlight: "",
  indoor: "",
};
interface IinitialFilters {
  edible: string;
  poisonous: string;
  cycle: string;
  watering: string;
  sunlight: string;
  indoor: string;
}

export default function FilterBox(props: { returnUrl: (url: string) => void }) {
  const [filters, setFilters] = useState<IinitialFilters>(initialFilters);

  useEffect(() => {
    // Construct the API URL whenever the filters change

    const translations = [
      ["Yes", "Sim"],
      ["No", "Não"],
      ...cycles,
      ...sunlight,
      ...watering,
    ];
    let translatedFilters: any = {
      edible: "",
      poisonous: "",
      cycle: "",
      watering: "",
      sunlight: "",
      indoor: "",
    };
    translations.forEach((trans) => {
      const keys = Object.keys(filters);
      Object.values(filters).forEach((filter, index) => {
        if (filter.toLowerCase() == trans[1].toLowerCase()) {
          translatedFilters[`${keys[index]}`] = trans[0];
        }
      });
    });
    console.log(translatedFilters);

    const url = `https://perenual.com/api/species-list?key=${apiKey}&indoor=${translatedFilters.indoor}&sunlight=${translatedFilters.sunlight}&watering=${translatedFilters.watering}&cycle=${translatedFilters.cycle}&poisonous=${translatedFilters.poisonous}&edible=${translatedFilters.edible}`;

    // Call the function to pass the URL wherever it needs to go (props.returnUrl(url))
    props.returnUrl(url);
  }, [filters]);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-row flex-wrap">
      <CheckboxFilter
        label="Comestivel"
        options={allOptions}
        selectedValues={filters.edible}
        handleChange={(values) => setFilters({ ...filters, edible: values })}
      />
      <CheckboxFilter
        label="Venenosa"
        options={allOptions}
        selectedValues={filters.poisonous}
        handleChange={(values) => setFilters({ ...filters, poisonous: values })}
      />
      <CheckboxFilter
        label="Ciclo"
        options={["Perene", "Anual", "Bienal", "Bianual"]}
        selectedValues={filters.cycle}
        handleChange={(values) => setFilters({ ...filters, cycle: values })}
      />
      <CheckboxFilter
        label="Molhar"
        options={["Frequente", "Médio", "Mínimo", "Nenhum"]}
        selectedValues={filters.watering}
        handleChange={(values) => setFilters({ ...filters, watering: values })}
      />
      <CheckboxFilter
        label="Sombra"
        options={[
          "Sombra total",
          "Sombra parcial",
          "Sombra parcial do sol",
          "Sol pleno",
        ]}
        selectedValues={filters.sunlight}
        handleChange={(values) => setFilters({ ...filters, sunlight: values })}
      />
      <CheckboxFilter
        label="Interior"
        options={allOptions}
        selectedValues={filters.indoor}
        handleChange={(values) => setFilters({ ...filters, indoor: values })}
      />
    </div>
  );
}
