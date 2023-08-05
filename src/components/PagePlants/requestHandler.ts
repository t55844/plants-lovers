import { Plant } from "./PagePlants"
const apiKey = import.meta.env.VITE_PLANTS_KEY;

//get the firts data to show in the first render
export async function getPlantsInfos(): Promise<Plant[]> {
    //look in local storage to see if there's something to display instead of
    //make a request every time the user renders the page
    const localData = localStorage.getItem('pagePlants')

    if (localData === null) {
        const response = await fetch(`https://perenual.com/api/species-list?page=1&key=${apiKey}`)
        const json = await response.json()
        localStorage.setItem('pagePlants', JSON.stringify(json))
        return json.data
    } else {
        const plantsFromLocalDb = JSON.parse(localData).data
        return plantsFromLocalDb
    }
}