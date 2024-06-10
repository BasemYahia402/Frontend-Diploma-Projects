import { useEffect, useState } from "react";
import Links from "../Shared/Links";
import Coupon from "../Shared/Coupon";
import { Link } from "react-router-dom";
import { useFetechData } from "../Hooks/useFetechData";
import cancelImg from "../assets/icon-cancel.png";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const styleDiv = "flex items-center justify-between py-3 font-semibold";
  const styleLink =
    "px-3 py-2 font-semibold border border-gray-400 rounded-sm md:py-3 md:px-9";
  const { t } = useTranslation();
  const { cartData, updateCartData } = useFetechData();
  const [products, setProducts] = useState(cartData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [hoveredRows, setHoveredRows] = useState([]);
  const handleCouponSubmit = (couponCode) => {
    setAppliedCoupon(couponCode);
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  useEffect(() => {
    setProducts(cartData);
  }, [cartData]);

  useEffect(() => {
    calculateTotalPrice();
  }, [products]);

  const calculateSubtotal = (product) => {
    if (product.quantity) {
      return parseInt(product.newPrice.slice(1)) * product.quantity;
    } else {
      return 0;
    }
  };

  const calculateTotalPrice = () => {
    const total = products.reduce((acc, product) => {
      return acc + calculateSubtotal(product);
    }, 0);
    setTotalPrice(total);
  };

  const handleDeleteProduct = (id) => {
    updateCartData(id, false);
  };

  const handleRowHover = (rowId, isHovered) => {
    if (isHovered) {
      setHoveredRows((prevRows) => [...prevRows, rowId]);
    } else {
      setHoveredRows((prevRows) => prevRows.filter((row) => row !== rowId));
    }
  };

  return (
    <main className="container px-4 mx-auto my-10 md:my-20">
      <Links title={t("Cart.Cart")} />
      <section className="mt-5 md:mt-20 ">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="border shadow">
              <th className="w-1/4 py-4">{t("Cart.Product")}</th>
              <th className="w-1/4 py-4">{t("Cart.Price")}</th>
              <th className="w-1/4 py-4">{t("Cart.Quantity")}</th>
              <th className="w-1/4 py-4">{t("Cart.Subtotal")}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="w-full my-4 border shadow "
                onMouseEnter={() => handleRowHover(product.id, true)}
                onMouseLeave={() => handleRowHover(product.id, false)}
              >
                <td className="relative flex flex-wrap items-center py-4 lg:px-10 lg:gap-5 md:px-3">
                  <img src={product.img} alt="productImg" className="w-14" />
                  <p className="text-sm font-semibold">{product.title}</p>
                  {hoveredRows.includes(product.id) && (
                    <button
                      className="absolute top-5 ltr:left-5 rtl:right-5"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <img src={cancelImg} alt="cancelImg" />
                    </button>
                  )}
                </td>
                <td className="md:w-1/4 ">{product.newPrice}</td>
                <td className="md:w-1/4 ">
                  <input
                    type="number"
                    className="w-16 px-2 py-1 border-2 rounded-md md:px-4 md:py-3 md:w-20 focus:outline-none"
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                    value={product.quantity}
                  />
                </td>
                <td className="md:w-1/4 ">{`$${calculateSubtotal(
                  product
                )}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-5">
          <Link to="/" className={styleLink}>
            {t("Cart.Return To Shop")}
          </Link>
          <Link to="/cart" className={styleLink}>
            {t("Cart.Update Cart")}
          </Link>
        </div>
      </section>

      <section className="flex flex-wrap justify-between gap-5 mt-20">
        <Coupon onCouponSubmit={handleCouponSubmit} />
        <div className="p-4 border-2 border-black rounded-sm w-[30rem]">
          <h2 className="mb-4 text-xl font-semibold">{t("Cart.Cart Total")}</h2>
          <div className="text-center">
            <div className={`${styleDiv} border-b`}>
              <span>{t("Cart.Subtotal")}:</span>
              <span>${totalPrice}</span>
            </div>
            <div className={`${styleDiv} border-b`}>
              <span>{t("Cart.Shipping")}:</span>
              <span>{t("Cart.Free")}</span>
            </div>
            <div className={`${styleDiv}`}>
              <span>{t("Cart.Total")}:</span>
              <span>${totalPrice}</span>
            </div>
            <Link
              to="/checkout"
              className="px-10 md:py-3 py-2 bg-[#df4444] text-white rounded-sm text-xl inline-block my-5"
              state={{
                products: products,
                totalPrice: totalPrice,
              }}
            >
              {t("Cart.Procees to checkout")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
