import { useState } from "react";
import LanguageDropdown from "../Shared/LanguageDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "../Context/AuthContext";
import { useCountContext } from "../Context/CountContext";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo.png";

const Navbar = ({ onHandleSearch }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAcountMenu, setShowAcountMenu] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuth, handleAuth } = useAuthContext();
  const navigate = useNavigate();
  const { cartCount, wishCount } = useCountContext();
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleLogOut = () => {
    localStorage.setItem("isAuth", false);
    handleAuth(false);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };
  const handleSerach = (e) => {
    e.preventDefault();
    onHandleSearch(e.target.value);
  };

  return (
    <>
      <div className="absolute bg-black w-full h-[5.1rem] md:h-14 "></div>
      <header className="container px-4 py-1 mx-auto md:py-0">
        <div className="relative flex items-center justify-between w-full text-white md:h-14">
          <p className="flex flex-wrap justify-between mx-auto">
            {t(
              "Navbar.Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            )}
            <Link
              to="/allProducts"
              className="font-semibold underline w-28 ltr:md:ml-4 rtl:md:mr-4"
            >
              {t("ShopNow")}
            </Link>
          </p>
          <LanguageDropdown />
        </div>
        <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between h-auto pt-4 md:h-20 md:pt-8">
          <div className="flex gap-3">
            <img src={logoImg} alt="logoImg" className="w-10" />
            <h1 className="pb-2 text-2xl font-bold md:pb-0 w-28">
              {t("Exclusive")}
            </h1>
          </div>
          <div className="block w-20 md:hidden text-end">
            <button onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <ul
            className={`md:flex text-base font-medium justify-between lg:w-80 rtl:lg:w-96 md:w-52 w-full md:h-10 h-12 items-center  ${
              showMobileMenu ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b border-black" : ""
              }
            >
              {t("Navbar.Home")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b border-black" : ""
              }
            >
              {t("Navbar.Contact")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b border-black" : ""
              }
            >
              {t("Navbar.About")}
            </NavLink>
            {isAuth ? null : (
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "border-b border-black" : ""
                  }
                >
                  {t("Navbar.Sign Up")}
                </NavLink>
              </li>
            )}
          </ul>

          <div
            className={`lg:w-96 md:flex justify-between items-center lg:gap-3 md:gap-1 ${
              showMobileMenu ? "flex" : "hidden"
            }`}
          >
            <div className="flex items-center justify-between w-[200px] h-10 px-2 py-2 bg-gray-100 rounded-md md:px-4 md:w-56">
              <input
                className="text-sm bg-gray-100 focus:outline-none"
                type="text"
                name="search"
                id="search"
                placeholder={t("Navbar.What are you looking for?")}
                onChange={handleSerach}
              />
              <Link to="/searchResults">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex items-center justify-between h-12 gap-2 md:gap-3 lg:w-32">
              {location.pathname !== "/login" &&
                location.pathname !== "/signup" && (
                  <>
                    <div className="relative">
                      <NavLink
                        to="/wishlist"
                        onClick={() => isAuth || navigate("/login")}
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </NavLink>
                      <span className="absolute ltr:-right-1 rtl:-left-1 -top-1 bg-[#df4444] text-white px-1 rounded-full text-xs">
                        {isAuth && wishCount}
                      </span>
                    </div>
                    <div className="relative">
                      <NavLink
                        to="/cart"
                        onClick={() => isAuth || navigate("/login")}
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
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                        <span className="absolute ltr:-right-1 rtl:-left-1 -top-1 bg-[#df4444] text-white px-1 rounded-full text-xs">
                          {isAuth && cartCount}
                        </span>
                      </NavLink>
                    </div>
                  </>
                )}

              {isAuth && (
                <div
                  className={`md:w-10 text-center relative cursor-pointer transition duration-500 ease-in-out z-10 ${
                    showAcountMenu
                      ? "bg-red-500 text-white p-2 rounded-full"
                      : ""
                  }`}
                  onClick={() => {
                    setShowAcountMenu(!showAcountMenu);
                  }}
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <div
                    className={`absolute ltr:right-0 rtl:left-0 w-56 h-56 p-5 bg-gradient-to-r from-[#937B96] #746676 to-[#413D41] top-11 rounded-md ${
                      showAcountMenu ? "block" : "hidden"
                    }`}
                  >
                    <div className="mb-4 text-white">
                      <NavLink to="/account" className="flex gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        <span>{t("Navbar.Profile.Manage My Account")}</span>
                      </NavLink>
                    </div>
                    <div className="mb-4 text-white">
                      <NavLink to="/order" className="flex gap-4">
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
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>

                        <span>{t("Navbar.Profile.My Order")}</span>
                      </NavLink>
                    </div>
                    <div className="mb-4 text-white">
                      <NavLink to="/Cancellations" className="flex gap-4">
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
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>

                        <span>{t("Navbar.Profile.My Cancellations")}</span>
                      </NavLink>
                    </div>
                    <div className="mb-4 text-white">
                      <NavLink to="/reviews" className="flex gap-4">
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
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>

                        <span>{t("Navbar.Profile.My Reviews")}</span>
                      </NavLink>
                    </div>
                    <button
                      className="flex gap-4 mb-4 text-white"
                      onClick={handleLogOut}
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
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>

                      <span>{t("Navbar.Profile.Logout")}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className={`border-b mt-3`}></div>
    </>
  );
};

export default Navbar;
