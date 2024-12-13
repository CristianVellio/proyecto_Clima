import { Link } from "react-router-dom";
import { TiWeatherDownpour } from "react-icons/ti";
import { FaHandHoldingHeart, FaReact, FaSearch } from "react-icons/fa";
import { SiMicropython } from "react-icons/si";

const Navbar = () => {
  return (
    <header className="max-w-screen mx-auto px-4 py-6  bg-tertiary">
      <nav className="flex justify-between items-center">
        {/* lado izquierdo */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <TiWeatherDownpour className="size-7" />
          </Link>

          {/* busqueda */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Buscar"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            ></input>
          </div>
        </div>

        {/* lado derecho */}

        <div className="relative flex items-center md:space-x-3 ">
          <SiMicropython className="size-6 bg-green-600" />

          <button className="hidden sm:block">
            <FaReact className="size-6" />
          </button>

          <Link
            to="/"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <FaHandHoldingHeart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">Donar</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
