import { useState } from "react";
import { useTranslation } from "react-i18next";

const Coupon = ({ onCouponSubmit }) => {
  const { t } = useTranslation();
  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCouponSubmit(couponCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="couponCode"
        id="couponCode"
        value={couponCode}
        onChange={(e) => {
          setCouponCode(e.target.value);
        }}
        className="w-40 px-2 py-2 border border-black rounded-sm ltr:mr-2 ltr:md:mr-4 rtl:md:ml-4 md:py-3 md:px-3 md:w-60 focus:outline-none rtl:ml-2"
        placeholder={t("Cart.Coupon Code")}
      />
      <button
        type="submit"
        className="bg-[#df4444] text-white md:px-10 md:py-3 py-2 px-2 rounded-sm mt-3"
      >
        {t("Cart.Apply Coupon")}
      </button>
    </form>
  );
};

export default Coupon;
