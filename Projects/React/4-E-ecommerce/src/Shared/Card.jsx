import { useEffect, useState } from "react";
import reviewImg from "../assets/review.png";
import { Link } from "react-router-dom";
import RatingStar from "../Components/RatingStar";
import { useTranslation } from "react-i18next";
const Card = (props) => {
  const {
    id,
    img,
    title,
    newPrice,
    oldPrice,
    rate,
    dicound,
    isNew,
    isWish,
    isCart,
    dir,
    onWishlistClick,
    onAddClick,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isClikedWish, setIsClikedWish] = useState(isWish);
  const [isClikedAdd, setIsClikedAdd] = useState(isCart);
  const [rating, setRating] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (rate.length > 0) {
      const sum = rate.reduce(
        (accumulator, currentValue) => accumulator + currentValue.star,
        0
      );
      setRating(sum / rate.length);
    }
  }, [rate]);
  const handleWishlist = () => {
    onWishlistClick(id, true);
    setIsClikedWish(true);
  };

  const handleDeleteFromWishlist = () => {
    onWishlistClick(id, false);
    setIsClikedWish(false);
  };

  const handleAddToCart = () => {
    onAddClick(id, true);
    setIsClikedAdd(true);
  };

  const handleRemoveFromCart = () => {
    onAddClick(id, false);
    setIsClikedAdd(false);
  };
  return (
    <div
      className="md:max-w-[18rem] bg-white border-gray-200 rounded-lg w-full px-1 md:px-0 mb-5 group/card rtl:flex-row-reverse transition duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      dir={dir}
    >
      <div className="relative py-10 bg-[#F5F5F5]">
        <img
          className="mx-auto transition-transform duration-300 rounded-sm group-hover/card:scale-110"
          src={img}
          alt="cardImg"
        />
        {!isNew && dicound && (
          <span className="absolute top-3 left-3 bg-[#df4444] text-white px-4 py-1 rounded-md">
            {dicound}
          </span>
        )}

        {isNew && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-white px-4 py-1 rounded-md">
            New
          </span>
        )}

        {isClikedAdd ? (
          <button
            className={`absolute bottom-0 w-full h-10 text-xl text-white bg-red-600 rounded-b-md transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleRemoveFromCart}
          >
            {t("Products.Remove from Cart")}
          </button>
        ) : (
          <button
            className={`absolute bottom-0 w-full h-10 text-xl text-white bg-black rounded-b-md transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleAddToCart}
          >
            {t("Products.Add To Cart")}
          </button>
        )}
        {isClikedWish && (
          <button
            className="absolute p-2 bg-white rounded-full top-3 right-3"
            onClick={handleDeleteFromWishlist}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        )}
        {!isClikedWish && (
          <button
            className={`absolute p-2 rounded-full top-3 right-3 bg-white`}
            onClick={handleWishlist}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 text-black`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        )}
        {!isClikedWish && (
          <Link
            to={`/productDetail/${id}`}
            className="absolute p-2 bg-white rounded-full top-16 right-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        )}
      </div>
      <div>
        <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900">
          {t(`Products.${id}.${title}`)}
        </h5>
        <p className="mb-2 font-medium">
          <span className="text-[#df4444] mr-2">{newPrice}</span>
          {!isNew && (
            <span className="text-gray-500 line-through">{oldPrice}</span>
          )}
        </p>
        <div className="flex items-center justify-between font-normal text-gray-700">
          <p className="flex items-center gap-3">
            <RatingStar rating={rating} setRating={setRating} readOnly={true} />
            <span>({rate.length})</span>
          </p>
          <Link to={`/review/${id}`}>
            <img src={reviewImg} alt="reviewImg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
