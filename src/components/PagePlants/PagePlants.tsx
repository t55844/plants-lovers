import { useEffect, useState } from "react";
import PlantsList from "./Plantlist";
import { getPlantsInfos } from "./requestHandler";

//this component is responsible for taking the list of plants and passing it to the PlantsList to be rendered
export default function PagePlants() {
    const [plants, setPlants] = useState<Plant[]>([])

    useEffect(() => {

        getPlantsInfos()
            .then(plantsArray => setPlants(plantsArray))
    }, [])

    return (
        <div className="mt-2 bg-white w-full">
            <PlantsList plants={plants} />

        </div>
    )
}

export interface Plant {
    id: number;
    common_name: string;
    scientific_name: string[];
    other_name: string[];
    cycle: string;
    watering: string;
    sunlight: string[]; // Assuming this is an array of strings, update the type accordingly if needed
    default_image: {
        image_id: number;
        license: number;
        license_name: string;
        license_url: string;
        original_url: string;
        regular_url: string;
        medium_url: string;
        small_url: string;
        thumbnail: string;
    };
}