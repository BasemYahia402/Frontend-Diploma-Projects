import { useState } from "react";
import loginImg from "../../assets/beatsnoop.png";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAuthContext } from "../../Context/AuthContext";
import { useTranslation } from "react-i18next";

const Login = () => {
  const styleInput =
    "w-full pt-5 pb-2 text-gray-400 border-b-2 border-gray-400 md:text-lg md:pt-10 focus:outline-none";
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { handleAuth, handleUserId } = useAuthContext();
  const navigate = useNavigate();
  const auth = getAuth();
  const errorCode = errorMessage
    ? errorMessage.includes("(") && errorMessage.includes(")")
      ? errorMessage.substring(
          errorMessage.indexOf("(") + 1,
          errorMessage.indexOf(")")
        )
      : errorMessage
    : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailOrPhoneNumber = email;
    const isPhoneNumber = /^\d{10}$/.test(Number(emailOrPhoneNumber));
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      emailOrPhoneNumber
    );
    if (isPhoneNumber) {
      const email = `${emailOrPhoneNumber}@gmail.com`;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          handleAuth(true);
          handleUserId(userCredential.user.uid);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          handleAuth(false);
        });
    } else if (isValidEmail) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          handleAuth(true);
          handleUserId(userCredential.user.uid);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          handleAuth(false);
        });
    } else {
      setErrorMessage("Please enter a valid email address or phone number.");
    }
  };

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setErrorMessage("Check your email to reset password");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="grid items-center grid-cols-12 gap-5 pt-10 pb-10 lg:justify-start md:gap-24 md:pt-12 md:pb-24">
      <img
        src={loginImg}
        alt="loginImg"
        className="w-full col-span-12 md:col-span-9 lg:col-span-7"
      />
      <div className="col-span-12 px-4 md:col-start-2 md:col-span-7 lg:col-span-4 md:px-0">
        <h1 className="mb-2 text-2xl font-bold md:font-normal md:mb-6 md:text-4xl">
          {t("Login.Log in to Exclusive")}
        </h1>
        <p className="font-medium md:text-lg">
          {t("Signup.Enter your details below")}
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("Signup.Email or Phone Number")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styleInput}
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              placeholder={t("Signup.Password")}
              onChange={(e) => setPassword(e.target.value)}
              className={styleInput}
            />
            <div
              className="absolute inset-y-0 py-5 pr-3 cursor-pointer ltr:right-0 rtl:left-0 md:py-10"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </div>
          </div>
          <p className="mt-5 text-red-600">
            {errorMessage && t(`Errors.${errorCode}`)}
          </p>
          <div className="flex items-center justify-between mt-10">
            <button
              type="submit"
              className="md:px-12 px-8 py-3 md:py-4 bg-[#DB4444] text-white rounded-md outline-none"
            >
              {t("Signup.Log in")}
            </button>
            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-[#DB4444] ltr:ml-auto"
            >
              {t("Signup.Forget Password?")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
