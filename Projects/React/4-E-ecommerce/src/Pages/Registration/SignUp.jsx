import { useState } from "react";
import loginImg from "../../assets/beatsnoop.png";
import googleImg from "../../assets/Icon-Google.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useAuthContext } from "../../Context/AuthContext.jsx";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const styleInput =
    "w-full pt-5 pb-2 text-gray-400 border-b-2 border-gray-400 md:text-lg md:pt-10 focus:outline-none";
  const styleButton = "w-full md:py-4 rounded-md outline-none";
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { handleUserId } = useAuthContext();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const errorCode = errorMessage
    ? errorMessage.includes("(") && errorMessage.includes(")")
      ? errorMessage.substring(
          errorMessage.indexOf("(") + 1,
          errorMessage.indexOf(")")
        )
      : errorMessage
    : null;
console.log(errorMessage);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailOrPhoneNumber = email;
    const isPhoneNumber = /^\d{10}$/.test(Number(emailOrPhoneNumber));
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      emailOrPhoneNumber
    );
    if (isPhoneNumber) {
      const email = `${emailOrPhoneNumber}@gmail.com`;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setDoc(doc(db, "users", userCredential.user.uid), {
            displayName: name,
            email: email,
            phoneNumber: emailOrPhoneNumber,
          });
          handleUserId(userCredential.user.uid);
          navigate("/login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else if (isValidEmail) {
      createUserWithEmailAndPassword(auth, emailOrPhoneNumber, password)
        .then((userCredential) => {
          setDoc(doc(db, "users", userCredential.user.uid), {
            displayName: name,
            email: emailOrPhoneNumber,
          });
          handleUserId(userCredential.user.uid);
          navigate("/login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      setErrorMessage("Please enter a valid email address or phone number.");
    }
  };

  const handleSignUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        const user = result.user;
        setDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          email: user.email,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
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
          {t("Signup.Create an account")}
        </h1>
        <p className="font-medium md:text-lg">
          {t("Signup.Enter your details below")}
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("Signup.Name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styleInput}
            required
          />
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
          <div className="mt-10">
            <button
              type="submit"
              className={`${styleButton} md:px-12 px-8 py-3 bg-[#DB4444] text-white   mb-5 font-semibold text-lg`}
            >
              {t("Signup.Create an account")}
            </button>
            <button
              type="button"
              className={`${styleButton} flex items-center justify-center py-3 border border-gray-400 md:px-5 rtl:flex-row-reverse`}
              onClick={handleSignUpWithGoogle}
            >
              <img src={googleImg} alt="googleImg" className="mr-4" />
              <span className="text-lg font-semibold ">
                {t("Signup.Sign up with Google")}
              </span>
            </button>
            <p className="w-64 mx-auto mt-10 text-lg font-semibold text-gray-400 rtl:w-72">
              {t("Signup.Already have account?")}
              <Link to="/login" className="pb-1 ml-3 text-gray-500 border-b-2">
                {t("Signup.Log in")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
