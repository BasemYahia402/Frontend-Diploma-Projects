import { useParams } from "react-router-dom";
import { useFetechData } from "../Hooks/useFetechData";
import { useEffect, useState } from "react";
import RatingStar from "../Components/RatingStar";
import Review from "../Components/Review";
import { useTranslation } from "react-i18next";
import UseGetUserData from "../Hooks/useGetUserData";

const Reviews = () => {
  const { t } = useTranslation();
  const { Products, updateRating } = useFetechData();
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [rateText, setRateText] = useState("");
  const [rating, setRating] = useState(0);
  const [newRating, setNewRating] = useState(0);
  const { userData } = UseGetUserData();

  useEffect(() => {
    if (product?.rate?.length > 0) {
      const sum = product.rate.reduce(
        (accumulator, currentValue) => accumulator + currentValue.star,
        0
      );
      setRating(sum / product.rate.length);
    }
  }, [product?.rate]);

  useEffect(() => {
    const foundProduct = Products.find(
      (product) => product.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId, Products]);
  const handleAddReview = (id) => {
    console.log(userData);
    updateRating(id, userData.displayName, rateText, newRating);
  };
  return (
    <main className="container p-4 mx-auto">
      <section className="flex flex-col justify-between gap-10 md:gap-16 lg:flex-row lg:items-center">
        <div className="flex flex-col-reverse gap-6 lg:w-2/4 md:flex-row">
          <div className="bg-[#F5F5F5] w-full p-5 ">
            <img
              src={product?.img}
              alt="activeImg"
              className="w-full mx-auto rounded-xl"
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <h1 className="text-2xl font-bold">
              {t(`Products.${product?.id}.${product?.title}`)}
            </h1>
          </div>
          <div className="flex">
            <RatingStar rating={rating} setRating={setRating} readOnly={true} />
            <span className="mx-3 text-gray-200"> | </span>
          </div>
          <p className="text-xl font-semibold md:text-2xl">
            {product?.newPrice}
          </p>
          <p className="pb-5 border-b border-black">
            {t(
              "Review.PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
            )}
          </p>
          <div>
            <div className="flex items-center gap-5">
              <h2 className="text-2xl">{t("Review.Your rate")}:</h2>
              <RatingStar
                rating={newRating}
                setRating={setNewRating}
                readOnly={false}
              />
            </div>
            <div>
              <input
                type="text"
                name="rateText"
                id="rateText"
                value={rateText}
                placeholder={t("Review.Write Feedback Please")}
                className="w-full p-2 my-3 border rounded-md focus:outline-none"
                onChange={(event) => {
                  setRateText(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  handleAddReview(product.id);
                }}
                className="px-10 py-3 bg-[#df4444] text-white rounded-md mx-auto w-30 flex"
              >
                {t("Review.Add Review")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <h2 className="mt-10 mb-4 text-2xl font-bold">{t("Review.Reviews")}</h2>
      {product?.rate?.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </main>
  );
};

export default Reviews;
