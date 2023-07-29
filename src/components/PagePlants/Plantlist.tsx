import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import { Plant } from "./PagePlants";
const apiKey = import.meta.env.VITE_PLANTS_KEY;

async function getPlantsInfos(): Promise<Plant[]> {
    const response = await fetch(`https://perenual.com/api/species-list?page=1&key=${apiKey}`)
    const json = await response.json()
    return json.data
}

export default function PlantsList() {
    const [plants, setPlants] = useState<Plant[]>()
    useEffect(() => {
        getPlantsInfos()
            .then(plantsArray => setPlants(plantsArray))
    }, [])
    return (
        <div className="flex flex-row justify-around items-center flex-wrap">
            {plants && plants.length ? plants.map(plant => <PlantCard key={Math.random()} plant={plant} />) : null}
        </div>
    )
}