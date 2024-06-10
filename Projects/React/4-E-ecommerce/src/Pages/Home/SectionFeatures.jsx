import { Link } from "react-router-dom";
import Title from "../../Shared/Title";
import { useTranslation } from "react-i18next";
import Features from "../../Shared/Features";

const SectionFeatures = ({ filterProducts, TitleText1, TitleText2 }) => {
  const styleArrivalDiv = "relative bg-black rounded-md col-span-4";
  const styleOverlay =
    "absolute inset-0 transition duration-500 ease-in-out bg-gray-500 opacity-50 hover:opacity-0";
  const { t } = useTranslation();
  return (
    <section className="mt-16">
      <Title text={TitleText1} />
      <h2 className="mt-4 text-2xl font-semibold md:text-4xl">{TitleText2}</h2>
      <div className="grid grid-cols-4 gap-5 my-10 md:my-16">
        <div
          className={`md:col-span-2 row-start-1 row-end-3 px-10 pt-20 ${styleArrivalDiv}`}
        >
          <img
            src={filterProducts[0]?.img}
            alt="playstationImg"
            className="h-full"
          />
          <div className={styleOverlay}></div>
          <div className="absolute w-64 text-white bottom-8 ltr:ltr:left-6">
            <h2 className="mb-2 text-2xl font-bold">
              {t(
                `Products.${filterProducts[0]?.id}.${filterProducts[0]?.title}`
              )}
            </h2>
            <p className="mb-2">
              {t(
                `Products.${filterProducts[0]?.id}.${filterProducts[0]?.description}`
              )}
            </p>
            <Link
              to={`/productDetail/${filterProducts[0]?.id}`}
              className="underline"
            >
              {t("ShopNow")}
            </Link>
          </div>
        </div>
        <div className={`${styleArrivalDiv} md:col-span-2`}>
          <img
            src={filterProducts[3]?.img}
            alt="playstationImg"
            className="w-[30rem] mx-auto"
          />
          <div className={styleOverlay}></div>
          <div className="absolute p-2 text-white bottom-5 ltr:left-6 rtl:right-6">
            <h2 className="mb-2 text-2xl font-bold">
              {t(
                `Products.${filterProducts[3]?.id}.${filterProducts[3]?.title}`
              )}
            </h2>
            <p className="mb-2 w-60">
              {t(
                `Products.${filterProducts[3]?.id}.${filterProducts[3]?.description}`
              )}
            </p>
            <Link
              to={`/productDetail/${filterProducts[3]?.id}`}
              className="underline"
            >
              {t("ShopNow")}
            </Link>
          </div>
        </div>
        <div className={`${styleArrivalDiv} p-9 md:col-span-1`}>
          <img src={filterProducts[2]?.img} alt="speakersImg" />
          <div className={styleOverlay}></div>
          <div className="absolute text-white bottom-5 ltr:left-6">
            <h2 className="mb-2 text-2xl font-bold">
              {t(
                `Products.${filterProducts[2]?.id}.${filterProducts[2]?.title}`
              )}
            </h2>
            <p className="mb-2">
              {t(
                `Products.${filterProducts[2]?.id}.${filterProducts[2]?.description}`
              )}
            </p>
            <Link
              to={`/productDetail/${filterProducts[2]?.id}`}
              className="underline"
            >
              {t("ShopNow")}
            </Link>
          </div>
        </div>
        <div className={`${styleArrivalDiv} p-9 md:col-span-1`}>
          <img src={filterProducts[1]?.img} alt="perfumeImg" />
          <div className={styleOverlay}></div>
          <div className="absolute text-white bottom-5 ltr:left-6">
            <h2 className="mb-2 text-2xl font-bold">
              {t(
                `Products.${filterProducts[1]?.id}.${filterProducts[1]?.title}`
              )}
            </h2>
            <p className="mb-2">
              {t(
                `Products.${filterProducts[1]?.id}.${filterProducts[1]?.description}`
              )}
            </p>
            <Link
              to={`/productDetail/${filterProducts[1]?.id}`}
              className="underline"
            >
              {t("ShopNow")}
            </Link>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default SectionFeatures;
