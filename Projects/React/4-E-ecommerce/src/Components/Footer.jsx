import { useTranslation } from "react-i18next";
import frame from "../assets/Frame.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instgram from "../assets/instagram.png";
import Linkedin from "../assets/Linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const block = "block";
  const styleH2 = "mb-5 text-2xl font-semibold";
  const styleP = "mb-3 text-lg";
  const styleDiv = "flex items-center justify-between";
  return (
    <footer className="text-white bg-black ">
      <div className="grid grid-cols-1 gap-10 px-5 lg:grid-cols-5 md:grid-cols-3 md:gap-16 md:py-10 md:px-16 py-7">
        <div className="leading-[3rem]">
          <h2 className={styleH2}>{t("Exclusive")}</h2>
          <p className="mb-3 text-xl font-semibold">{t("Footer.Subscribe")}</p>
          <p>{t("Footer.Get 10% off your first order")}</p>
          <div className={`${styleDiv} p-3 border-2 rounded-md `}>
            <input
              type="email"
              name=""
              id=""
              placeholder={t("Footer.Enter Your Email")}
              className="w-full text-lg bg-transparent focus:outline-none md:w-32"
            />
            <button>
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
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="leading-[3rem]">
          <h2 className={styleH2}>{t("Footer.Support")}</h2>
          <p className={styleP}>
            {t("Footer.111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.")}
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="leading-[3rem]">
          <h2 className={styleH2}>{t("Footer.Account")}</h2>
          <Link className={`${styleP} ${block}`} to="/account">
            {t("Footer.My Account")}
          </Link>
          <Link to="/login">{t("Footer.Login")}/</Link>
          <Link to="/signup">{t("Footer.Register")}</Link>
          <Link to="/cart" className={block}>
            {t("Footer.Cart")}
          </Link>
          <Link to="/wishlist" className={block}>
            {t("Footer.Wishlist")}
          </Link>
          <Link to="/" className={block}>
            {t("Footer.Shop")}
          </Link>
        </div>
        <div className="leading-[3rem]">
          <h2 className={styleH2}>{t("Footer.Quick Link")}</h2>
          <Link to="" className={styleP}>{t("Footer.Privacy Policy")}</Link>
          <Link to="" className={block}>{t("Footer.Terms Of Use")}</Link>
          <Link to="" className={block}>{t("Footer.FAQ")}</Link>
          <Link to="/contact" className={block}>{t("Footer.Contact")}</Link>
        </div>
        <div className="leading-[3rem]">
          <h2 className={styleH2}>{t("Footer.Download App")}</h2>
          <p className="mb-3 text-sm">
            {t("Footer.Save $3 with App New User Only")}
          </p>
          <img src={frame} alt="frameImg" />
          <div className={`${styleDiv} mt-5`}>
            <Link to="">
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link to="">
              <img src={Twitter} alt="Twitter" />
            </Link>
            <Link to="">
              <img src={Instgram} alt="Instgram" />
            </Link>
            <Link to="">
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-zinc-800">
        <p className="py-6 mx-auto text-lg text-zinc-700 md:w-96">
          &copy;{t("Footer.Copyright Rimel 2022. All right reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
