import { Link } from "react-router-dom";
import notFoundImg from "../assets/notfound.webp";
const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-around px-2 py-10 text-center select-none lg:overflow-y-hidden lg:py-0 lg:flex-row">
      <img src={notFoundImg} alt="Not Found image" className="lg:h-screen" />
      <div className="flex flex-col items-center gap-10">
        <h2 className="mt-10 text-3xl font-bold lg:text-5xl text-main-700">
          Oops! Page not found
        </h2>
        <Link
          to="/"
          className="px-8 py-4 text-white duration-200 bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Back to Home Page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
