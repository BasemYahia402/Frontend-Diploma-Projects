import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <main className="container h-screen p-4 mx-auto text-center">
      <p className="mb-10 text-4xl md:text-8xl">
        {t("NotFound.404 Not Found")}
      </p>
      <p className="mb-20 font-medium">
        {t("NotFound.Your visited page not found. You may go home page")}
      </p>
      <Link
        to="/"
        className="bg-[#DB4444] text-white md:px-14 md:py-5 py-4 px-5 w-72 mx-auto rounded-md "
      >
        {t("NotFound.Back to home page")}
      </Link>
    </main>
  );
};

export default NotFound;
