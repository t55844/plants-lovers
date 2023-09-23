// Import Tailwind CSS classes for styling
import "tailwindcss/tailwind.css";

export default function RequisitionResponseBox(props: {
  text: string;
  toShow: boolean;
  loading: boolean;
  error: boolean;
}) {
  const { text, toShow, loading, error } = props;

  if (!toShow) return null;

  return (
    <div className="w-10/12 mx-auto p-4 ">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <div
          className={`m-auto m-2 p-3  border ${
            error
              ? "border-red-700 bg-red-100"
              : "border-green-300 bg-green-100"
          }  rounded-lg  `}
        >
          <p className="text-black ">{text}</p>
        </div>
      )}
    </div>
  );
}
