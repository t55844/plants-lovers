import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";

const apiKey = import.meta.env.VITE_PLANTS_KEY;
const allOptions = ["Yes", "No"];

const initialFilters = {
  edible: [],
  poisonous: [],
  cycle: [],
  watering: [],
  sunlight: [],
  indoor: [],
  hardiness: [],
};
interface IinitialFilters {
  edible: string[];
  poisonous: string[];
  cycle: string[];
  watering: string[];
  sunlight: string[];
  indoor: string[];
  hardiness: string[];
}

export default function FilterBox(props: { returnUrl: (url: string) => void }) {
  const [filters, setFilters] = useState<IinitialFilters>(initialFilters);

  useEffect(() => {
    // Construct the API URL whenever the filters change
    const url = `https://perenual.com/api/species-list?key=${apiKey}&hardiness=${filters.hardiness}&indoor=${filters.indoor}&sunlight=${filters.sunlight}&watering=${filters.watering}&cycle=${filters.cycle}&poisonous=${filters.poisonous}&edible=${filters.edible}`;

    // Call the function to pass the URL wherever it needs to go (props.returnUrl(url))
    props.returnUrl(url);
  }, [filters]);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-row flex-wrap">
      <CheckboxFilter
        label="Edible"
        options={allOptions}
        selectedValues={filters.edible}
        handleChange={(values) => setFilters({ ...filters, edible: values })}
      />
      <CheckboxFilter
        label="Poisonous"
        options={allOptions}
        selectedValues={filters.poisonous}
        handleChange={(values) => setFilters({ ...filters, poisonous: values })}
      />
      <CheckboxFilter
        label="Cycle"
        options={["Perennial", "Annual", "Biennial", "Biannual"]}
        selectedValues={filters.cycle}
        handleChange={(values) => setFilters({ ...filters, cycle: values })}
      />
      <CheckboxFilter
        label="Watering"
        options={["Frequent", "Average", "Minimum", "None"]}
        selectedValues={filters.watering}
        handleChange={(values) => setFilters({ ...filters, watering: values })}
      />
      <CheckboxFilter
        label="Sunlight"
        options={["Full Shade", "Part Shade", "Sun-Part Shade", "Full Sun"]}
        selectedValues={filters.sunlight}
        handleChange={(values) => setFilters({ ...filters, sunlight: values })}
      />
      <CheckboxFilter
        label="Indoor"
        options={allOptions}
        selectedValues={filters.indoor}
        handleChange={(values) => setFilters({ ...filters, indoor: values })}
      />
    </div>
  );
}
