import { Loader } from "../../Shared/Loader";
import { Link } from "react-router-dom";
import Title from "../../Shared/Title";
import Card from "../../Shared/Card";
import DiscountDate2 from "../../Components/DiscountData2";

const SectionMonth = ({
  Products,
  TitleText1,
  TitleText2,
  categoriesText,
  Text,
  musicImg,
  ButtonText1,
  ButtonText2,
  handleWishlistClick,
  handleAddToCartClick,
}) => {
  return (
    <section className="py-10 md:py-20">
      <Title text={TitleText1} />
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
          {TitleText2}
        </h2>
        <Link
          to="/allProducts"
          className="bg-[#df4444] text-white md:px-12 md:py-4 px-10 py-3 rounded-md"
        >
          {ButtonText1}
        </Link>
      </div>
      <div className="flex flex-wrap items-center mt-5 gap-7 md:mt-16">
        {Products.length > 0 ? (
          Products.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              {...product}
              onWishlistClick={(productId, isWish) => {
                handleWishlistClick(productId, isWish);
              }}
              onAddClick={(productId, isAdd) => {
                handleAddToCartClick(productId, isAdd);
              }}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className="flex flex-wrap justify-between w-full gap-5 px-5 py-10 mt-10 bg-black md:py-20 md:px-10 md:mt-40">
        <div className="w-96">
          <p className="font-bold text-[#00FF66]">{categoriesText}</p>
          <h3 className="mt-5 text-4xl text-white md:text-5xl">{Text}</h3>
          <DiscountDate2 />
          <button className="md:px-14 md:py-5 px-8 py-3 mt-10 text-white bg-[#00FF66] rounded-md text-xl">
            {ButtonText2}!
          </button>
        </div>
        <div>
          <img src={musicImg} alt="musicImg" />
        </div>
      </div>
    </section>
  );
};

export default SectionMonth;
