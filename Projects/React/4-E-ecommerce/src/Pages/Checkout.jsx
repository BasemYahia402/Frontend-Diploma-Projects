import { useState } from "react";
import imgBanks from "../assets/banks.png";
import Coupon from "../Shared/Coupon";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DEFAULT_DATA = {
  first_name: "",
  company_name: "",
  street_address: "",
  apartment: "",
  town: "",
  phone: "",
  email: "",
  PaymentMethod: "",
};

const Checkout = () => {
  const styleDiv =
    "flex items-center justify-between py-5 border-b border-gray-700";
  const stylePaymentRadio =
    "w-4 h-4 ltr:mr-3 rtl:ml-3 md:h-6 md:w-6 checked:text-black cursor-pointer";
  const { t } = useTranslation();
  const [dataBilling, setDataBilling] = useState(DEFAULT_DATA);
  const [isChecked, setIsChecked] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const location = useLocation();
  const { products, totalPrice } = location.state;
  const handleCouponSubmit = (couponCode) => {
    setAppliedCoupon(couponCode);
  };
  const inputs = [
    {
      label: t("Checkout.First Name"),
      value: "first_name",
      isRequired: true,
    },
    {
      label: t("Checkout.Company Name"),
      value: "company_name",
      isRequired: false,
    },
    {
      label: t("Checkout.Street Address"),
      value: "street_address",
      isRequired: true,
    },
    {
      label: t("Checkout.Apartment, floor, etc. (optional)"),
      value: "apartment",
      isRequired: false,
    },
    {
      label: t("Checkout.Town/City"),
      value: "town",
      isRequired: true,
    },
    {
      label: t("Checkout.Phone Number"),
      value: "phone",
      isRequired: true,
    },
    {
      label: t("Checkout.Email Address"),
      value: "email",
      isRequired: true,
    },
  ];

  const handleOrder = () => {
    console.log(dataBilling);
    console.log(isChecked);
    console.log(appliedCoupon);
  };

  const handleInputChange = (key, value) => {
    if (key === "PaymentMethod") {
      setDataBilling({
        ...dataBilling,
        PaymentMethod: value,
      });
    } else {
      setDataBilling({
        ...dataBilling,
        [key]: value,
      });
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main className="container p-4 mx-auto my-10 md:my-20">
      <h1 className="text-xl font-semibold md:text-3xl">
        {t("Checkout.Billing Details")}
      </h1>
      <div className="grid justify-between grid-cols-2 gap-10 mt-10 lg:gap-40">
        <div className="col-span-2 md:col-span-1">
          {inputs.map((input, index) => (
            <div className="mb-10" key={index}>
              <label htmlFor={input.label} className="block mb-3 text-gray-400">
                {input.label}
                {input.isRequired && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                name={input.label}
                id={input.label}
                value={dataBilling[input.value]}
                className="bg-[#F5F5F5] rounded-sm px-3 py-4 focus:outline-none w-full"
                onChange={(e) => {
                  handleInputChange(input.value, e.target.value);
                }}
              />
            </div>
          ))}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="checkbox"
                id="checkbox"
                className="w-6 h-6 border border-gray-300 rounded-md appearance-none cursor-pointer ltr:mr-3 rtl:ml-3 checked:bg-red-500 checked:border-transparent focus:outline-none"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`absolute top-0 mt-0 ml-1 text-white ltr:left-1 ${
                  isChecked ? "block" : "hidden"
                }`}
              >
                &#10003;
              </span>
            </div>
            <label htmlFor="checkbox" className="font-semibold text-black ">
              {t(
                "Checkout.Save this information for faster check-out next time"
              )}
            </label>
          </div>
        </div>
        <div className="w-full col-span-2 font-semibold md:col-span-1">
          <div className="w-full lg:w-3/4">
            <div>
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-5"
                >
                  <div className="flex items-center">
                    <img
                      src={product.img}
                      alt="productImg"
                      className="mr-5 w-14"
                    />
                    <span>{product.title}</span>
                  </div>
                  <p>
                    {product.newPrice} x {product.quantity}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <div className={styleDiv}>
                <p>{t("Cart.Subtotal")}:</p>
                <p>${totalPrice}</p>
              </div>
              <div className={styleDiv}>
                <p>{t("Cart.Shipping")}:</p>
                <p>Free</p>
              </div>
              <div className="flex items-center justify-between py-5">
                <p>{t("Cart.Total")}:</p>
                <p>${totalPrice}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5 md:flex-row">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="radioBank"
                  className={stylePaymentRadio}
                  onChange={() => {
                    handleInputChange("PaymentMethod", "bank");
                  }}
                />
                <label htmlFor="radioBank" className="text-xl">
                  {t("Checkout.Bank")}
                </label>
              </div>
              <img src={imgBanks} alt="" />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="radio"
                name="paymentMethod"
                id="radioCash"
                className={stylePaymentRadio}
                onChange={() => {
                  handleInputChange("PaymentMethod", "Cash");
                }}
              />
              <label htmlFor="radioCash" className="text-xl">
                {t("Checkout.Cash on delivery")}
              </label>
            </div>
          </div>
          <Coupon onCouponSubmit={handleCouponSubmit} />
          <button
            className="bg-[#df4444] text-white md:px-10 py-2 md:py-3 rounded-sm px-5 md:mt-10 mt-5"
            onClick={handleOrder}
          >
            {t("Checkout.Place Order")}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
