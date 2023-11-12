import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-4xl text-teal-500 mb-4">
        <i className="material-icons">error_outline</i>
      </span>
      <h1 className="text-2xl font-bold text-teal-500 mb-2">Ops Erro ...</h1>
      <p className="text-teal-500 mb-4">Pagina não Encontrada.</p>
      <Link
        to="/"
        className="text-white bg-teal-500 px-4 py-2 rounded hover:bg-teal-600"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NoPage;
