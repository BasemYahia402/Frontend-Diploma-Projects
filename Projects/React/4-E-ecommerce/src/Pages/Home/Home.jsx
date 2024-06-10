import musicImg from "../../assets/Products/muisc.png";
import phoneImg from "../../assets/Products/phone.svg";
import appleImg from "../../assets/apple.png";
import { useFetechData } from "../../Hooks/useFetechData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import SectionToday from "./SectionToday";
import SectionCategories from "./SectionCategories";
import SectionMonth from "./SectionMonth";
import SectionOurProducts from "./SectionOurProducts";
import SectionFeatures from "./SectionFeatures";

const Home = () => {
  const styleLink = "font-semibold block mb-5";

  const { t } = useTranslation();
  const { Products, updateWishlistData, updateCartData } = useFetechData();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = Products.filter((product) =>
      [8, 9, 10, 11].includes(product.id)
    );
    const sortedProducts = filteredProducts.sort((a, b) => a.id - b.id);
    setFilterProducts(sortedProducts);
  }, [Products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const overideSetting = {
    rows: 2,
  };

  const category = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      name: t("Category.Phones"),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
      name: t("Category.Computers"),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
      name: t("Category.SmartWatch"),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
          />
        </svg>
      ),
      name: t("Category.Camera"),
    },
    {
      icon: (
        <svg
          className="w-12 h-12 mx-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="0.8"
            d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"
          />
        </svg>
      ),
      name: t("Category.HeadPhones"),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
          />
        </svg>
      ),
      name: t("Category.Gaming"),
    },
  ];

  const handleWishlistClick = (id, isWish) => {
    updateWishlistData(id, isWish);
  };
  const handleAddToCartClick = (id, isAdd) => {
    updateCartData(id, isAdd, 1);
  };

  return (
    <main className="container px-4 mx-auto mb-20">
      <section className="grid grid-cols-12 grid-rows-1 md:gap-5">
        <div className="col-span-12 row-start-2 pt-10 md:row-start-1 lg:pt-20 md:col-span-3 md:pe-5 md:border-e-2">
          <div className="flex items-center justify-between mb-5">
            <Link to="/allProducts" className="font-semibold">
              {t("Home.Woman’s Fashion")}
            </Link>
            {document.documentElement.dir === "rtl" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            ) : (
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center justify-between mb-5">
            <Link to="/allProducts" className="font-semibold">
              {t("Home.Men’s Fashion")}
            </Link>
            {document.documentElement.dir === "rtl" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            ) : (
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Electronics")}
          </Link>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Home & Lifestyle")}
          </Link>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Medicine")}
          </Link>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Sports & Outdoor")}
          </Link>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Baby’s & Toys")}
          </Link>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Groceries & Pets")}
          </Link>
          <Link to="/allProducts" className={styleLink}>
            {t("Home.Health & Beauty")}
          </Link>
        </div>
        <div className="flex flex-col-reverse flex-wrap items-center col-span-12 p-5 mx-auto mt-10 bg-black lg:flex-nowrap lg:flex-row lg:mt-20 md:col-span-9 lg:ms-10">
          <div className="text-white ">
            <div className="flex items-center gap-5 mb-8">
              <img src={appleImg} alt="appleImg" />
              <h1>{t("Home.iPhone 14 Series")}</h1>
            </div>
            <p className="mb-8 text-5xl font-bold">
              {t("Home.Up to 10% off Voucher")}
            </p>
            <Link to="/allProducts" className="flex items-center gap-3">
              <span className="flex gap-3 py-1 text-xl border-b">
                {t("ShopNow")}
              </span>
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <img src={phoneImg} alt="phoneImg" />
        </div>
      </section>

      <SectionToday
        Products={Products}
        settings={settings}
        TitleText={t("Titles.Today’s")}
        ButtonText={t("Buttons.View All Products")}
        handleWishlistClick={handleWishlistClick}
        handleAddToCartClick={handleAddToCartClick}
      />
      
      <SectionCategories
        category={category}
        TitleText1={t("Titles.Categories")}
        TitleText2={t("Titles.Browse By Category")}
      />
      
      <SectionMonth
        Products={Products}
        TitleText1={t("Titles.This Month")}
        TitleText2={t("Titles.Best Selling Products")}
        categoriesText={t("Titles.Categories")}
        Text={t("Enhance Your Music Experience")}
        musicImg={musicImg}
        ButtonText1={t("Buttons.View All")}
        ButtonText2={t("Buttons.Buy Now")}
        handleWishlistClick={handleWishlistClick}
        handleAddToCartClick={handleAddToCartClick}
      />

      <SectionOurProducts
        Products={Products}
        settings={settings}
        overideSetting={overideSetting}
        TitleText1={t("Titles.Our Products")}
        TitleText2={t("Titles.Explore Our Products")}
        ButtonText={t("Buttons.View All Products")}
        handleWishlistClick={handleWishlistClick}
        handleAddToCartClick={handleAddToCartClick}
      />

      <SectionFeatures
        filterProducts={filterProducts}
        TitleText1={t("Titles.Featured")}
        TitleText2={t("Titles.New Arrival")}
      />
    </main>
  );
};

export default Home;
