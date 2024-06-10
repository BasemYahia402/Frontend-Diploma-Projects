import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Links = ({ title }) => {
  const { t } = useTranslation();
  return (
    <p>
      <Link to="/" className="text-gray-400">
        {t("Navbar.Home")} /
      </Link>
      {title}
    </p>
  );
};

export default Links;
