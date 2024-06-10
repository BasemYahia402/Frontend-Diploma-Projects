import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    console.log(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", newLang);
  };

useEffect(()=>{
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      document.documentElement.dir = storedLanguage === "ar" ? "rtl" : "ltr";
    }
},[])

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="bg-black focus:outline-none"
    >
      <option value="en">{i18n.t("Navbar.English")}</option>
      <option value="ar">{i18n.t("Navbar.Arabic")}</option>
      <option value="tr">{i18n.t("Navbar.Turkish")}</option>
    </select>
  );
};

export default LanguageDropdown;
