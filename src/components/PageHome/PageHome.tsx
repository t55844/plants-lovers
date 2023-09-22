import Header from "./Header";
import PagePlants from "../PagePlants/PagePlants";

export default function PageHome() {
    return (
        <div className="h-screen flex flex-col justify-around items-center">
            <div className='bg-lime-200 w-full md:h-auto m-auto md:p-10'>
                <Header />
            </div>
            <PagePlants />
        </div>
    )
}