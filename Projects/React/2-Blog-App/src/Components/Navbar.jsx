import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { useSearchContext } from "./context/SearchContext";
const Navbar = () => {
  const { searchValue, handleSearch } = useSearchContext();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container flex flex-wrap items-center justify-between max-w-6xl gap-6 p-4 mx-auto">
        <div className="flex">
          <img src={logoImg} alt="logoImg" />
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
        <Link to="/" className="text-lg font-semibold">
          Home
        </Link>
        <div className="flex items-center p-3 bg-gray-100 rounded-lg ps-6">
          <input
            type="text"
            className="bg-gray-100 focus:outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
