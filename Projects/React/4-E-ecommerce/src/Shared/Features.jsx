import { useTranslation } from "react-i18next";
import carImg from "../assets/icon-delivery.png";
import secureImg from "../assets/Icon-secure.png";
import serviceImg from "../assets/Icon-service.png";

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: carImg,
      name: t("Features.FREE AND FAST DELIVERY"),
      text: t("Features.Free delivery for all orders over $140"),
    },
    {
      icon: serviceImg,
      name: t("Features.24/7 CUSTOMER SERVICE"),
      text: t("Features.Friendly 24/7 customer support"),
    },
    {
      icon: secureImg,
      name: t("Features.MONEY BACK GUARANTEE"),
      text: t("Features.We reurn money within 30 days"),
    },
  ];
  
  return (
    <div className="grid grid-cols-1 gap-5 mt-10 md:mt-20 md:grid-cols-3">
      {features.map((feature, index) => (
        <div key={index} className="relative p-5 text-center">
          <div className="w-[3.3rem] p-[8px] mx-auto bg-gray-300 rounded-full mb-3">
            <img
              src={feature.icon}
              alt="featureImg"
              className="p-1 text-base bg-black rounded-full"
            />
          </div>
          <p className="mb-2 text-xl font-bold">{feature.name}</p>
          <p className="font-medium">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
