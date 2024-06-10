import { Link } from "react-router-dom";
import Card from "../Shared/Card";
import Title from "../Shared/Title";
import { useFetechData } from "../Hooks/useFetechData";
import { useTranslation } from "react-i18next";
import { Loader } from "../Shared/Loader";

const Wishlist = () => {
  const { t } = useTranslation();
  const { wishlistData, Products, updateWishlistData, updateCartData } =
    useFetechData();
  const handleWishlistClick = (id, isWish) => {
    updateWishlistData(id, isWish);
    console.log(isWish);
  };
  
  const handleAddToCartClick = (id, isAdd) => {
    updateCartData(id, isAdd, 1);
  };

  const handleClick = () => {
    wishlistData.forEach((product) => {
      updateCartData(product.id, true);
    });
  };

  return (
    <main className="container px-4 py-20 mx-auto">
      <section>
        <div className="flex items-center justify-between gap-3 mb-12">
          <p className="font-semibold">
            {t("Wishlist.Wishlist")} ({wishlistData.length})
          </p>
          <button
            className="px-5 py-4 font-semibold border md:px-10"
            onClick={handleClick}
          >
            {t("Wishlist.Move All To Bag")}
          </button>
        </div>
        <div className="flex flex-wrap items-center mt-5 gap-7 md:mt-16">
          {wishlistData.map((product) => (
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
          ))}
        </div>
      </section>
      <section className="mt-20">
        <div className="flex items-center justify-between gap-3 mb-12">
          <Title text={t("Wishlist.Just For You")} />
          <Link to="/" className="px-5 py-4 font-semibold border md:px-10">
            {t("Wishlist.See All")}
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
      </section>
    </main>
  );
};

export default Wishlist;
