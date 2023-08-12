import { CleaningServices } from "@mui/icons-material";

interface CheckboxFilterProps {
    label: string
    options: string[]
    selectedValues: any
    handleChange: (option: any) => void
}

const CheckboxFilter = ({ label, options, selectedValues, handleChange }: CheckboxFilterProps) => {
    return (
        <div className="w-5/12 md:w-1/3 m-1 p-1 md:p-2 md:m-2 bg-teal-50 rounded-lg ">
            <label className="block text-teal-500 font-bold mb-2">{label}:</label>
            {options.map((option) => (
                <div key={option} className="flex items-center">
                    <input
                        type="checkbox"
                        id={`option${option}`}
                        className="mr-2 h-8"
                        checked={selectedValues === option}
                        onChange={() => handleChange(option)}
                    />
                    <label htmlFor={`option-${option}`}>{option}</label>
                </div>
            ))}
            <button className="rounded-xl border-x border-y border-teal-700 bg-teal-300 p-1 " onClick={() => handleChange('')}>
                <CleaningServices className="text-white " fontSize="small" />
            </button>
        </div>
    );
};

export default CheckboxFilter;
