import { useState } from "react";
import { useTranslation } from "react-i18next";

const DEFAULT_DATA = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Profile = () => {
  const { t } = useTranslation();
  const styleInput = "w-full p-3 bg-gray-100 rounded-sm focus:outline-none";
  const styleLabel = "block mb-2 font-semibold";
  const styleDivOfInputAndLabel = "col-span-2 md:col-span-1";
  const [form, setForm] = useState(DEFAULT_DATA);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submite");
  };
  return (
    <div className="w-full shadow-sm md:py-2 md:px-5 lg:px-20 lg:py-10">
      <h1 className="text-xl font-semibold text-red-400">
        {t("Profile.Edit Your Profile")}
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-2 mb-10 md:gap-x-3 lg:gap-x-12 gap-y-5"
      >
        <div className={styleDivOfInputAndLabel}>
          <label htmlFor="first name" className={styleLabel}>
            {t("Profile.First Name")}
          </label>
          <input
            type="text"
            name="first name"
            id="first name"
            value={form.first_name}
            onChange={(e) => {
              setForm({ ...form, first_name: e.target.value });
            }}
            className={styleInput}
          />
        </div>
        <div className={styleDivOfInputAndLabel}>
          <label htmlFor="Last Name" className={styleLabel}>
            {t("Profile.Last Name")}
          </label>
          <input
            type="text"
            name="Last Name"
            id="Last Name"
            value={form.last_name}
            onChange={(e) => {
              setForm({ ...form, last_name: e.target.value });
            }}
            className={styleInput}
          />
        </div>
        <div className={styleDivOfInputAndLabel}>
          <label htmlFor="Email" className={styleLabel}>
            {t("Profile.Email")}
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            className={styleInput}
          />
        </div>
        <div className={styleDivOfInputAndLabel}>
          <label htmlFor="Address" className={styleLabel}>
            {t("Profile.Address")}
          </label>
          <input
            type="text"
            name="Address"
            id="Address"
            value={form.address}
            onChange={(e) => {
              setForm({ ...form, address: e.target.value });
            }}
            className={styleInput}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="Password Changes" className={styleLabel}>
            {t("Profile.Password Changes")}
          </label>
          <input
            type="password"
            name="currentPassword"
            id="Password Changes"
            value={form.currentPassword}
            placeholder={t("Profile.Current Passwod")}
            onChange={(e) => {
              setForm({ ...form, currentPassword: e.target.value });
            }}
            className={`${styleInput} mb-4`}
          />
          <input
            type="password"
            name="New Passwod"
            id="New Passwod"
            value={form.newPassword}
            placeholder={t("Profile.New Passwod")}
            onChange={(e) => {
              setForm({ ...form, newPassword: e.target.value });
            }}
            className={`${styleInput} mb-4`}
          />
          <input
            type="password"
            name="Confirm New Passwod"
            id="Confirm New Passwod"
            value={form.confirmPassword}
            placeholder={t("Profile.Confirm New Passwod")}
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
            }}
            className={`${styleInput} mb-4`}
          />
        </div>
        <div className="col-span-2 lg:col-start-2 lg:col-span-1 text-end">
          <button className="ltr:mr-6 rtl:ml-6">{t("Profile.Cancel")}</button>
          <button
            type="submit"
            className="bg-[#df4444] text-white md:px-10 md:py-3 rounded-md font-semibold px-3 py-2"
          >
            {t("Profile.Save Changes")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
