import React from 'react';
import './FilterBox.css';

const FilterBox = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Edible:</label>
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="">All</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Poisonous:</label>
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="">All</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Cycle:</label>
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="">All</option>
                    <option value="perennial">Perennial</option>
                    <option value="annual">Annual</option>
                    <option value="biennial">Biennial</option>
                    <option value="biannual">Biannual</option>
                </select>
            </div>
            {/* Implement the remaining filters */}
        </div>
    );
};

export default FilterBox;
