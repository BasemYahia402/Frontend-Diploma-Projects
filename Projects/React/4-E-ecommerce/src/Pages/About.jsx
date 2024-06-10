import Links from "../Shared/Links";
import sideImage from "../assets/sideImage.png";
import personImg1 from "../assets/person1.png";
import personImg2 from "../assets/person2.png";
import iconTwitter from "../assets/Icon-Twitter.png";
import iconLinkedin from "../assets/Icon-Linkedin.png";
import iconInstagram from "../assets/icon-instagram.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "../Shared/Features";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const statistics = [
    {
      icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      number: "10.5k",
      text: t("About.Sellers active on our site"),
    },
    {
      icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      number: "33k",
      text: t("About.Monthly Produduct Sale"),
    },
    {
      icon: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
      number: "45.5k",
      text: t("About.Customer active in our site"),
    },
    {
      icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      number: "25k",
      text: t("About.Anual gross sale in our site"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "-30px",
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const personData = [
    {
      img: personImg1,
      name: t("About.Tom Cruise"),
      jop: t("About.Founder & Chairman"),
    },
    {
      img: personImg2,
      name: t("About.Emma Watson"),
      jop: t("About.Managing Director"),
    },
    {
      img: personImg1,
      name: t("About.Will Smith"),
      jop: t("About.Product Designer"),
    },
  ];

  return (
    <main>
      <section className="container px-4 py-10 mx-auto md:py-20">
        <Links title={t("About.About")} />
      </section>
      <section className="container px-5 ml-auto rtl:mx-auto lg:pe-0">
        <div className="flex flex-col-reverse flex-wrap items-center gap-10 lg:flex-nowrap lg:flex-row">
          <div>
            <h1 className="mb-6 text-2xl font-bold md:mb-10 md:text-5xl">
              {t("About.Our Story")}
            </h1>
            <p className="mb-5">
              {t(
                "About.Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region."
              )}
            </p>
            <p>
              {t(
                "About.Exclusive has more than 1 Million products to offer, growing at avery fast rate. Exclusive offers a diverse assortment in categories ranging from consumer."
              )}
            </p>
          </div>
          <img
            src={sideImage}
            alt="sideImage"
            className="hidden w-full rounded-sm md:block"
          />
        </div>
      </section>
      <section className="container px-4 py-10 mx-auto md:py-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-3">
          {statistics.map((statitic, index) => (
            <div
              key={index}
              className="relative p-5 text-center transition duration-300 ease-in-out border cursor-pointer group hover:bg-[#df4444] hover:text-white"
            >
              <div className="w-[3.3rem] p-[6px] mx-auto bg-gray-300 rounded-full mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 text-white transition duration-300 ease-in-out bg-black rounded-full group-hover:bg-white group-hover:text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={statitic.icon}
                  />
                </svg>
              </div>
              <p className="mb-2 text-2xl font-bold">{statitic.number}</p>
              <p className="font-medium">{statitic.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 lg:px-10 md:mt-20 lg:mt-32">
          <Slider {...settings} dir={document.documentElement.dir}>
            {personData.map((person, index) => (
              <div
                key={index}
                className="max-w-xs bg-white border border-gray-200 rounded-lg shadow "
                dir={document.documentElement.dir}
              >
                <img
                  className="rounded-t-lg"
                  src={person.img}
                  alt="personImg1"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {person.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {person.jop}
                  </p>
                  <div className="flex items-center cursor-pointer">
                    <img
                      src={iconTwitter}
                      alt="iconTwitter"
                      className={`${
                        document.documentElement.dir === "rtl"
                          ? "rtl:ml-3"
                          : "ltr:mr-3"
                      } `}
                    />
                    <img
                      src={iconInstagram}
                      alt="iconInstagram"
                      className={`${
                        document.documentElement.dir === "rtl"
                          ? "rtl:ml-3"
                          : "ltr:mr-3"
                      } `}
                    />
                    <img src={iconLinkedin} alt="iconLinkedin" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Features />
      </section>
    </main>
  );
};

export default About;
