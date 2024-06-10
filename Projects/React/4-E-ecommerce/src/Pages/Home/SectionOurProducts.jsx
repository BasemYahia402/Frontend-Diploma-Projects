import Title from "../../Shared/Title";
import Slider from "react-slick";
import Card from "../../Shared/Card";
import { Loader } from "../../Shared/Loader";
import { Link } from "react-router-dom";

const SectionOurProducts = ({
  Products,
  settings,
  overideSetting,
  TitleText1,
  TitleText2,
  ButtonText,
  handleWishlistClick,
  handleAddToCartClick,
}) => {
  return (
    <section>
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
        <div className="w-full mt-10">
          {Products.length > 0 ? (
            <Slider
              {...settings}
              {...overideSetting}
              className="mx-3"
              dir={document.documentElement.dir}
            >
              {Products.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  onWishlistClick={(productId, isWish) => {
                    handleWishlistClick(productId, isWish);
                  }}
                  onAddClick={(productId, isAdd) => {
                    handleAddToCartClick(productId, isAdd);
                  }}
                  dir={document.documentElement.dir}
                />
              ))}
            </Slider>
          ) : (
            <Loader />
          )}
          <Link
            to="/allProducts"
            className="bg-[#df4444] text-white md:px-16 px-8 py-2 md:py-4 mt-10 md:mt-20 md:text-xl text-lg rounded-md mx-auto text-center flex md:w-72 w-52"
          >
            {ButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionOurProducts;
