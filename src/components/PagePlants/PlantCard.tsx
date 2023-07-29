import React from 'react';

interface PlantCardProps {
    plant: {
        id: number;
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
        }; common_name: string;
        scientific_name: string;
        cycle: string;
        watering: string;
        sunlight: string[];
    }
}

//this component receives an object from the array of plants and assembles a card with information about
export default function PlantCard(props: PlantCardProps) {
    const { plant } = props
    const imgSrc = () => {
        //check all urls to find one that is working
        return plant.default_image && typeof plant.default_image.original_url == 'string' ? plant.default_image.original_url :
            plant.default_image && typeof plant.default_image.regular_url == 'string' ? plant.default_image.regular_url :
                plant.default_image && typeof plant.default_image.small_url == 'string' ? plant.default_image.small_url :
                    plant.default_image && typeof plant.default_image.medium_url == 'string' ? plant.default_image.medium_url : ''
    }

    return (
        <div className="w-11/12 md:w-1/4 lg:w-1/5 m-4 ">

            <div key={plant.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={imgSrc()} alt={plant.common_name} className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-bold mb-2">{plant.common_name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plant.scientific_name}</p>
                <p className="text-gray-800 text-sm ">{'# ' + plant.sunlight}</p>
                <p className="text-gray-800 text-sm ">{'# ' + plant.watering}</p>
                <p className="text-gray-800 text-sm ">{'# ' + plant.cycle}</p>
            </div>

        </div>
    );
}