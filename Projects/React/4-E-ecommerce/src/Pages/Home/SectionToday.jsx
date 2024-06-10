/* eslint-disable react/prop-types */
import Title from '../../Shared/Title';
import DiscountDate from '../../Components/DiscountDate';
import Slider from 'react-slick';
import Card from '../../Shared/Card';
import { Loader } from '../../Shared/Loader';
import { Link } from 'react-router-dom';

const SectionToday = ({
  Products,
  settings,
  TitleText,
  ButtonText,
  handleWishlistClick,
  handleAddToCartClick,
}) => {
  return (
    <section className="py-10 border-b md:py-20">
      <Title text={TitleText} />
      <DiscountDate />

      {Products.length > 0 ? (
        <Slider
          {...settings}
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
        className="bg-[#df4444] text-white md:px-16 px-12 py-3 md:py-4 mt-20 text-xl rounded-md mx-auto text-center flex w-72"
      >
        {ButtonText}
      </Link>
    </section>
  );
};

export default SectionToday;
