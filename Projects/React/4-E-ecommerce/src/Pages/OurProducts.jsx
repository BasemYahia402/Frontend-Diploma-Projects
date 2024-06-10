import Card from "../Shared/Card";
import Title from "../Shared/Title";
import { useFetechData } from "../Hooks/useFetechData";
import { useTranslation } from "react-i18next";
import { Loader } from "../Shared/Loader";

const OurProducts = () => {
  const { t } = useTranslation();
  const { Products, updateWishlistData, updateCartData } = useFetechData();
  const handleWishlistClick = (id, isWish) => {
    updateWishlistData(id, isWish);
  };
  const handleAddToCartClick = (id, isAdd) => {
    updateCartData(id, isAdd, 1);
  };
  return (
    <main className="container p-4 py-10 mx-auto">
      <Title text={t("Titles.Our Products")} />
      <div className="flex flex-wrap items-center mt-5 gap-7 md:mt-16">
        {Products.length > 0 ? (
          Products.map((product) => (
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
    </main>
  );
};

export default OurProducts;
