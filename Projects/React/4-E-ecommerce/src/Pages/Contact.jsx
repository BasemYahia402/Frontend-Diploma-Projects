import { useState } from "react";
import Links from "../Shared/Links";
import { useTranslation } from "react-i18next";

const DEFAULT_DATA = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const styleSvg = "w-10 bg-[#df4444] text-white rounded-full p-[8px]";
  const inputStyle =
    "px-5 py-3 bg-gray-100 rounded-md focus:outline-none md:w-48 lg:w-60 text-gray-800 mb-3 w-full";
  const { t } = useTranslation();
  const [form, setForm] = useState(DEFAULT_DATA);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!", form);
  };
  return (
    <div className="container px-4 py-10 mx-auto md:py-20">
      <Links title={t("Contact.Contact")} />
      <div className="grid grid-cols-4 gap-10 mt-10 md:mt-20 lg:grid-cols-12 md:grid-cols-8">
        <div className="col-span-4 p-8 shadow-md md:col-span-3 lg:col-span-4 lg:p-10 md:p-5">
          <div className="pb-6 mb-8 border-b border-gray-700 ">
            <p className="flex items-center gap-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styleSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="font-semibold">{t("Contact.Call To Us")}</span>
            </p>
            <p className="mb-5 font-semibold">
              {t("Contact.We are available 24/7, 7 days a week.")}
            </p>
            <p className="font-semibold">
              {t("Contact.Phone")}: +8801611112222
            </p>
          </div>
          <div>
            <p className="flex items-center gap-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styleSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <span className="font-semibold">{t("Contact.Write To US")}</span>
            </p>
            <p className="mb-5 font-medium">
              {t(
                "Contact.Fill out our form and we will contact you within 24 hours."
              )}
            </p>
            <p className="mb-5 font-medium">
              {t("Contact.Emails")}: customer@exclusive.com
            </p>
            <p className="font-medium">
              {t("Contact.Emails")}: support@exclusive.com
            </p>
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="col-span-4 p-4 shadow-md lg:p-8 md:col-span-5 md:p-5 lg:col-span-8"
        >
          <div className="mb-10">
            <input
              type="text"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              placeholder={t("Contact.Your Name")}
              className={`${inputStyle} ltr:md:mr-4`}
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder={t("Contact.Your Email")}
              className={`${inputStyle} lg:mr-4`}
              required
            />
            <input
              type="phone"
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              placeholder={t("Contact.Your Phone")}
              className={`${inputStyle} rtl:lg:mr-4`}
              required
            />
          </div>
          <textarea
            name=""
            id=""
            className="w-full p-5 bg-gray-100 h-52 focus:outline-none"
            placeholder={t("Contact.Your Massage")}
          ></textarea>
          <div className="flex justify-end w-full">
            <button className="bg-[#DB4444] text-white px-16 py-4 rounded-md mt-7 font-semibold md:w-60 w-full">
              {t("Contact.Send Massage")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
