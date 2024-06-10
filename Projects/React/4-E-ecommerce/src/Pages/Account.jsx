import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Links from "../Shared/Links";

import { useTranslation } from "react-i18next";
import UseGetUserData from "../Hooks/useGetUserData";

const Account = () => {
  const { t } = useTranslation();
  const { userData } = UseGetUserData();
  return (
    <main className="container px-4 mx-auto mt-5 md:mt-20">
      <div className="flex items-center justify-between">
        <Links title={t("Acount.My Account")} />
        <p>
          {t("Acount.Welcome!")}{" "}
          <span className="text-red-400">
            {userData ? userData.displayName : t("Acount.Loading...")}
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-10 mt-5 md:mt-20 md:flex-nowrap">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
};

export default Account;
