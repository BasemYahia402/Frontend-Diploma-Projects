import { Link } from "react-router-dom";
import Title from "../../Shared/Title";

const SectionCategories = ({ category, TitleText1, TitleText2 }) => {
  return (
    <section className="py-10 border-b md:py-20">
      <Title text={TitleText1} />
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
          {TitleText2}
        </h2>
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 p-3 rounded-full bg-gray-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 p-3 rounded-full bg-gray-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-5 md:mt-16">
        {category.map((category, index) => (
          <Link
            to="/allProducts"
            key={index}
            className="p-5 text-center border rounded-md md:w-[11.8rem] h-36 w-full group hover:bg-[#df4444] cursor-pointer"
          >
            <div className="group-hover:text-white">{category.icon}</div>
            <p className="mt-4 font-medium group-hover:text-white">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCategories;
