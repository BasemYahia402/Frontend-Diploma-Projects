import { useTranslation } from "react-i18next";
import { useDate } from "../Hooks/useDate";

const DiscountDate2 = () => {
  const stylep =
    "flex flex-col items-center md:px-3 md:py-2 text-black bg-white rounded-full";
  const styleSpan = "font-bold md:text-xl";
  const timeRemaining = useDate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3 mt-10 md:gap-5">
      <p className={`${stylep} py-1 px-2`}>
        <span className={styleSpan}>{timeRemaining.hours}</span>
        <span className="text-xs">{t("Hours")}</span>
      </p>
      <p className={`${stylep} md:px-4 py-1 px-3`}>
        <span className={styleSpan}>{timeRemaining.days}</span>
        <span className="text-xs">{t("Days")}</span>
      </p>
      <p className={`${stylep} p-1`}>
        <span className={styleSpan}>{timeRemaining.minutes}</span>
        <span className="text-xs">{t("Minutes")}</span>
      </p>
      <p className={`${stylep} p-1`}>
        <span className={styleSpan}>{timeRemaining.seconds}</span>
        <span className="text-xs">{t("Seconds")}</span>
      </p>
    </div>
  );
};

export default DiscountDate2;
