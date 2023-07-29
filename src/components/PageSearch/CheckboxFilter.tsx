// CheckboxFilter.js
import React from 'react';

const CheckboxFilter = ({ label, options, selectedValues, handleChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-teal-500 font-bold mb-2">{label}:</label>
            {options.map((option) => (
                <div key={option} className="flex items-center">
                    <input
                        type="checkbox"
                        id={`option-${option}`}
                        className="mr-2"
                        checked={selectedValues.includes(option)}
                        onChange={() => handleChange(option)}
                    />
                    <label htmlFor={`option-${option}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxFilter;
