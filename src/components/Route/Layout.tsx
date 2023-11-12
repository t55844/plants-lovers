import { Outlet, Link } from "react-router-dom";
import Footer from "../PageHome/Footer";

const Layout = () => {
  return (
    <>
      <nav className="bg-teal-500 py-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <img
              src="/logo.jpg"
              className=" w-10 h-10 bg-transparent rounded-xl"
              alt=""
            />
          </li>
          <li>
            <Link
              to="/"
              className="text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Pesquisa
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Usuario
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
