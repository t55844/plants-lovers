import { useEffect, useState } from 'react';
import { Search } from "@mui/icons-material";
const apiKey = import.meta.env.VITE_PLANTS_KEY;

export default function SearchBar(props: { getInputData: (value: string) => void }) {
    const { getInputData } = props
    const [searchInput, setSearchInput] = useState<string>('')

    useEffect(() => {
        const url = `https://perenual.com/api/species-list?key=${apiKey}&q=${searchInput}`;

        getInputData(url)

    }, [searchInput])

    return (
        <div className="flex items-center mx-auto my-2 bg-lime-200 w-11/12 md:w-1/2 rounded-md p-2">
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow bg-transparent outline-none text-white"
            />
            <Search className="text-white" />
        </div>
    );
};

