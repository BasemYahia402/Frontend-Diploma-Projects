import { useDate } from "../Hooks/useDate";
import { useTranslation } from "react-i18next";
const DiscountDate = () => {
  const styleSpan = "text-2xl md:text-4xl font-bold";
  const styleP =
    "flex flex-col text-sm items-center justify-between font-semibold";
  const styledots = "text-[#df4444] text-4xl md:mx-4 mb-2";
  const timeRemaining = useDate();
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap items-end gap-5 mt-5 mb-10 md:gap-16">
      <h2 className="text-2xl font-bold md:text-4xl">
        {t("Titles.Flash Sales")}
      </h2>
      <div className="flex items-end justify-between w-60">
        <p className={styleP}>
          {t("Days")}
          <span className={styleSpan}>{timeRemaining.days}</span>
        </p>
        <span className={styledots}>:</span>
        <p className={styleP}>
          {t("Hours")}
          <span className={styleSpan}>{timeRemaining.hours}</span>
        </p>
        <span className={styledots}>:</span>
        <p className={styleP}>
          {t("Minutes")}
          <span className={styleSpan}>{timeRemaining.minutes}</span>
        </p>
        <span className={styledots}>:</span>
        <p className={styleP}>
          {t("Seconds")}
          <span className={styleSpan}>{timeRemaining.seconds}</span>
        </p>
      </div>
    </div>
  );
};

export default DiscountDate;
