import React, { useState } from 'react';
import CheckboxFilter from './CheckboxFilter';

const FilterBox = () => {
    const [edible, setEdible] = useState([]);
    const [poisonous, setPoisonous] = useState([]);
    const [cycle, setCycle] = useState([]);
    const [watering, setWatering] = useState([]);
    const [sunlight, setSunlight] = useState([]);
    const [indoor, setIndoor] = useState([]);
    const [hardiness, setHardiness] = useState([]);

    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <CheckboxFilter
                label="Edible"
                options={['All', 'Yes', 'No']}
                selectedValues={edible}
                handleChange={(values) => setEdible(values)}
            />
            <CheckboxFilter
                label="Poisonous"
                options={['All', 'Yes', 'No']}
                selectedValues={poisonous}
                handleChange={(values) => setPoisonous(values)}
            />
            <CheckboxFilter
                label="Cycle"
                options={['All', 'Perennial', 'Annual', 'Biennial', 'Biannual']}
                selectedValues={cycle}
                handleChange={(values) => setCycle(values)}
            />
            <CheckboxFilter
                label="Watering"
                options={['All', 'Frequent', 'Average', 'Minimum', 'None']}
                selectedValues={watering}
                handleChange={(values) => setWatering(values)}
            />
            <CheckboxFilter
                label="Sunlight"
                options={['All', 'Full Shade', 'Part Shade', 'Sun-Part Shade', 'Full Sun']}
                selectedValues={sunlight}
                handleChange={(values) => setSunlight(values)}
            />
            <CheckboxFilter
                label="Indoor"
                options={['All', 'Yes', 'No']}
                selectedValues={indoor}
                handleChange={(values) => setIndoor(values)}
            />
            <CheckboxFilter
                label="Hardiness Zone"
                options={['All', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']}
                selectedValues={hardiness}
                handleChange={(values) => setHardiness(values)}
            />
        </div>


    );
};

export default FilterBox;
