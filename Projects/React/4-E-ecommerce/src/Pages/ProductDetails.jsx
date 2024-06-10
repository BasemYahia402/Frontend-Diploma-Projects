import { useState } from "react";
// import imgRate from "../assets/Products/fiveStar.png";
import carImg from "../assets/icon-delivery-black.png";
import returnImg from "../assets/Icon-return.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Title from "../Shared/Title";
import Card from "../Shared/Card";
import { useFetechData } from "../Hooks/useFetechData";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import RatingStar from "../Components/RatingStar";

const ProductDetails = () => {
  const styleAddAndMin =
    "w-8 h-full text-2xl md:text-3xl md:w-10 hover:text-white hover:bg-[#df4444] rounded";
  const { t } = useTranslation();
  const { Products, updateWishlistData, updateCartData } = useFetechData();
  const colors = ["red", "green", "blue"];
  const sizes = ["xs", "s", "m", "l", "xl"];
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImage] = useState("");
  const [amount, setAmount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { productId } = useParams();
  const [rating, setRating] = useState(0);
  const navigate = useNavigate("");

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
    setActiveImage(foundProduct?.img);
  }, [productId, Products]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleWishlistClick = (id, isWish) => {
    updateWishlistData(id, isWish);
  };

  const handleAddToCartClick = (id, isAdd, quantity) => {
    updateCartData(id, isAdd, quantity);
  };

  const handleBuyClick = () => {
    handleAddToCartClick(product.id, true, amount);
  };

  return (
    <main className="container p-4 mx-auto my-10 md:my-20">
      <p className="mb-10 text-gray-400 md:mb-20">
        <Link to="/">Account /</Link>
        <span> Gaming /</span>
        <span className="text-black"> product</span>
      </p>
      <section className="flex flex-col justify-between gap-10 md:gap-16 lg:flex-row lg:items-center">
        <div className="flex flex-col-reverse gap-6 lg:w-3/4 md:flex-row">
          <div className="flex flex-row justify-between w-full h-full gap-5 md:flex-col md:w-1/4">
            {product?.imgGallary?.map((image, index) => (
              <div className="bg-[#F5F5F5] w-full md:p-3 p-2" key={index}>
                <img
                  src={image}
                  alt="imgCard"
                  className="rounded-md cursor-pointer md:h-24 md:w-24"
                  onClick={() => setActiveImage(image)}
                />
              </div>
            ))}
          </div>
          <div className="bg-[#F5F5F5] w-full p-5 ">
            <img
              src={activeImg}
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
          <div className="flex items-center">
            {/* <img src={imgRate} alt="imageRate" className="mr-2" /> */}
            <RatingStar rating={rating} setRating={setRating} readOnly={true} />
            <span className="text-gray-500">
              ({product?.rate?.length} {t("ProductDetails.Reviews")})
            </span>
            <span className="mx-3 text-gray-200"> | </span>
            <span className="text-green-500">In Stock</span>
          </div>
          <p className="text-xl font-semibold md:text-2xl">
            {product?.newPrice}
          </p>
          <p className="pb-5 border-b border-black">
            {t(`Products.${product?.id}.${product?.description}`)}
          </p>

          <div className="flex space-x-2">
            <span className="text-xl font-semibold rtl:ml-5 ltr:mr-3">
              {t("ProductDetails.Colours")} :
            </span>
            {colors.map((color, index) => (
              <label
                key={index}
                className="relative flex items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={selectedColor === color}
                  onChange={() => handleColorChange(color)}
                  className="w-6 h-6 border border-gray-300 rounded-full appearance-none checked:bg-opacity-100 checked:bg-gray-900 focus:outline-none"
                />
                <span
                  className={`w-4 h-4 rounded-full bg-${color} absolute`}
                  style={{ backgroundColor: color }}
                ></span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2">
            <span className="text-xl font-semibold rtl:ml-5 ltr:mr-3">
              {t("ProductDetails.Size")} :
            </span>
            {sizes.map((size, index) => (
              <label
                key={index}
                className="relative flex items-center cursor-pointer group hover:text-white hover:bg-[#df4444] border-gray-300 rounded"
              >
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                  className="w-8 py-4 border border-transparent appearance-none focus:outline-none"
                />
                <span className="absolute w-8 py-[6px] text-sm font-semibold text-center capitalize border border-gray-500 rounded-md group-hover:border-0">
                  {size}
                </span>
              </label>
            ))}
          </div>
          <div className="flex flex-row flex-wrap items-center gap-3 md:gap-6">
            <div className="flex flex-row items-center h-10 border rounded-md md:h-12">
              <button
                className={styleAddAndMin}
                onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}
              >
                -
              </button>
              <span className="py-2 text-xl text-center md:text-2xl border-x w-14 md:w-20 md:h-12">
                {amount}
              </span>
              <button
                className={styleAddAndMin}
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="h-full px-8 py-2 md:py-3 md:w-52 font-semibold text-white bg-[#df4444] rounded-md"
              onClick={handleBuyClick}
            >
              {t("Buttons.Buy Now")}
            </button>
            <button
              className="p-2 border rounded-md"
              onClick={() => {
                handleWishlistClick(product.id, true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 md:h-8 md:w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 font-semibold border border-gray-400 rounded-md">
            <div className="flex items-center px-3 py-5 border-b border-gray-400">
              <img src={carImg} alt="carImg" className="ltr:mr-3 rtl:ml-3" />
              <div>
                <h2>{t("ProductDetails.Free Delivery")}</h2>
                <p className="text-sm underline">
                  {t(
                    "ProductDetails.Enter your postal code for Delivery Availability"
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center px-3 py-5">
              <img src={returnImg} alt="carImg" className="ltr:mr-3 rtl:ml-3" />
              <div>
                <h2>{t("ProductDetails.Return Delivery")}</h2>
                <p className="text-xs">
                  {t("ProductDetails.Free 30 Days Delivery Returns.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 md:mt-24">
        <Title text="Related Item" />
        <div className="flex flex-wrap items-center justify-between gap-10 mt-10 md:gap-5 md:mt-20">
          {Products.slice(0, 4).map((product, index) => (
            <Card
              key={index}
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
    </main>
  );
};

export default ProductDetails;
