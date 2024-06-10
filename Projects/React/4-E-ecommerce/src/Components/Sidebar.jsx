import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Sidebar = () => {
  const { t } = useTranslation();
  const styleLink = "block mb-2";
  const styleH2 = "font-semibold mb-4";
  const styleDiv = "pl-8 text-gray-400";
  return (
    <div className="w-96">
      <div className="mb-6">
        <h2 className={styleH2}>{t("Sidebar.Manage My Account")}</h2>
        <div className={styleDiv}>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? `${styleLink} text-red-600` : `${styleLink}`
            }
          >
            {t("Sidebar.My Profile")}
          </NavLink>
          <NavLink
            to="/account/address"
            className={({ isActive }) =>
              isActive ? `${styleLink} text-red-600` : `${styleLink}`
            }
          >
            {t("Sidebar.Address Book")}
          </NavLink>
          <NavLink
            to="/account/payment"
            className={({ isActive }) =>
              isActive ? `${styleLink} text-red-600` : `${styleLink}`
            }
          >
            {t("Sidebar.My Payment Options")}
          </NavLink>
        </div>
      </div>
      <div className="mb-6">
        <h2 className={styleH2}>{t("Sidebar.My Orders")}</h2>
        <div className={styleDiv}>
          <NavLink
            to="/account/return"
            className={({ isActive }) =>
              isActive ? `${styleLink} text-red-600` : `${styleLink}`
            }
          >
            {t("Sidebar.My Returns")}
          </NavLink>
          <NavLink
            to="/account/cancellations"
            className={({ isActive }) =>
              isActive ? `${styleLink} text-red-600` : `${styleLink}`
            }
          >
            {t("Sidebar.My Cancellations")}
          </NavLink>
        </div>
      </div>
      <h2 className={styleH2}>{t("Sidebar.My WishList")}</h2>
    </div>
  );
};

export default Sidebar;
