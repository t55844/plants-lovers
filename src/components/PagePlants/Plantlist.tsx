import React from "react";
import PlantCard from "./PlantCard";
import { Plant } from "./PagePlants";



export default function PlantsList(props: { plants: Plant[] }) {
    const { plants } = props

    return (
        <div className="flex flex-row justify-around items-center flex-wrap">
            {plants && plants.length ? plants.map(plant => <PlantCard key={Math.random()} plant={plant} />) : null}
        </div>
    )
}