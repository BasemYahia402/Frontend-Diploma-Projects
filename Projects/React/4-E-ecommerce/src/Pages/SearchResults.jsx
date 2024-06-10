import { useTranslation } from "react-i18next";
import { useSearchContext } from "../Context/SearchContext";
import { useFetechData } from "../Hooks/useFetechData";
import Card from "../Shared/Card";

const SearchResults = () => {
  const { t } = useTranslation();
  const { Products, updateWishlistData, updateCartData } = useFetechData();
  const { searchValue } = useSearchContext();

  const searchResults =
    searchValue === ""
      ? ""
      : Products.filter((product) =>
          `${t(`Products.${product.id}.${product.title}`)}`
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
  const handleWishlistClick = (id, isWish) => {
    updateWishlistData(id, isWish);
  };

  const handleAddToCartClick = (id, isAdd) => {
    updateCartData(id, isAdd, 1);
  };

  return (
    <div className="container px-4 mx-auto">
      {searchResults?.length === 0 ? (
        <p className="my-40 text-4xl font-bold text-center">
          {t("Search.No results found")}.
        </p>
      ) : (
        <div className="flex flex-wrap items-center mt-5 gap-7 md:mt-16">
          {searchResults?.map((product) => (
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
      )}
    </div>
  );
};

export default SearchResults;
