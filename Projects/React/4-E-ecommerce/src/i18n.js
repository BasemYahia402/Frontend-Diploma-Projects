import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          Navbar: {
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!":
              "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
            Arabic: "Arabic",
            English: "English",
            Turkish: "Turkish",
            Home: "Home",
            Contact: "Contact",
            About: "About",
            "Sign Up": "Sign Up",
            "What are you looking for?": "What are you looking for?",
            Profile: {
              "Manage My Account": "Manage My Account",
              "My Order": "My Order",
              "My Cancellations": "My Cancellations",
              "My Reviews": "My Reviews",
              Logout: "Logout",
            },
          },
          Footer: {
            Subscribe: "Subscribe",
            "Get 10% off your first order": "Get 10% off your first order",
            "Enter Your Email": "Enter Your Email",
            Support: "Support",
            "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.":
              "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
            Account: "Account",
            "My Account": "My Account",
            Login: "Login",
            Register: "Register",
            Cart: "Cart",
            Wishlist: "Wishlist",
            Shop: "Shop",
            "Quick Link": "Quick Link",
            "Privacy Policy": "Privacy Policy",
            "Terms Of Use": "Terms Of Use",
            FAQ: "FAQ",
            Contact: "Contact",
            "Download App": "Download App",
            "Save $3 with App New User Only": "Save $3 with App New User Only",
            "Copyright Rimel 2022. All right reserved":
              "Copyright Rimel 2022. All right reserved",
          },
          Home: {
            "Woman’s Fashion": "Woman’s Fashion",
            "Men’s Fashion": "Men’s Fashion",
            Electronics: "Electronics",
            "Home & Lifestyle": "Home & Lifestyle",
            Medicine: "Medicine",
            "Sports & Outdoor": "Sports & Outdoor",
            "Baby’s & Toys": "Baby’s & Toys",
            "Groceries & Pets": "Groceries & Pets",
            "Health & Beauty": "Health & Beauty",
            "iPhone 14 Series": "iPhone 14 Series",
            "Up to 10% off Voucher": "Up to 10% off Voucher",
          },
          Products: {
            "Add To Cart": "Add To Cart",
            "Remove from Cart": "Remove from Cart",
            0: {
              "HAVIT HV-G92 Gamepad": "HAVIT HV-G92 Gamepad",
              "The HAVIT HV-G92 Gamepad is a wired controller with a reliable 3D ergonomic design and built-in motors for dual vibration. It features a unique and delicate design with 8 direction buttons, 12 action buttons, and 2 analog sticks. The gamepad also has turbo and clear special functions, providing an immersive gaming experience.":
                "The HAVIT HV-G92 Gamepad is a wired controller with a reliable 3D ergonomic design and built-in motors for dual vibration. It features a unique and delicate design with 8 direction buttons, 12 action buttons, and 2 analog sticks. The gamepad also has turbo and clear special functions, providing an immersive gaming experience.",
            },
            1: {
              "AK-900 Wired Keyboard": "AK-900 Wired Keyboard",
              "The AK-900 Wired Keyboard is a high-quality gaming keyboard with a sleek and modern design. It features a wired USB connection for reliable and lag-free performance. The keyboard has a 104-key layout with a metal backlit for enhanced visibility and style.":
                "The AK-900 Wired Keyboard is a high-quality gaming keyboard with a sleek and modern design. It features a wired USB connection for reliable and lag-free performance. The keyboard has a 104-key layout with a metal backlit for enhanced visibility and style.",
            },
            2: {
              "Gucci duffle bag": "Gucci duffle bag",
              "The Gucci Duffle Bag is a classic and stylish piece of luggage that is perfect for a weekend getaway or a trip to the gym. It is crafted from the finest materials, with a durable and water-resistant coated canvas exterior that is accented by the iconic Gucci web stripe. The bag features leather trim and handles, as well as a detachable shoulder strap for easy carrying.":
                "The Gucci Duffle Bag is a classic and stylish piece of luggage that is perfect for a weekend getaway or a trip to the gym. It is crafted from the finest materials, with a durable and water-resistant coated canvas exterior that is accented by the iconic Gucci web stripe. The bag features leather trim and handles, as well as a detachable shoulder strap for easy carrying.",
            },
            3: {
              "The north coat": "The north coat",
              "The North Face offers a wide range of winter coats for both men and women, designed to provide superior warmth and comfort in cold weather conditions. These coats are available in various styles and types, including down jackets, synthetic insulation jackets, parkas, and puffer jackets.":
                "The North Face offers a wide range of winter coats for both men and women, designed to provide superior warmth and comfort in cold weather conditions. These coats are available in various styles and types, including down jackets, synthetic insulation jackets, parkas, and puffer jackets.",
            },
            4: {
              "S-Series Comfort Chair": "S-Series Comfort Chair",
              "The S-Series Comfort Chair is a high-quality ergonomic office chair designed to provide exceptional comfort and support for long hours of sitting. This chair is perfect for individuals who spend a significant amount of time working at a desk or computer.":
                "The S-Series Comfort Chair is a high-quality ergonomic office chair designed to provide exceptional comfort and support for long hours of sitting. This chair is perfect for individuals who spend a significant amount of time working at a desk or computer.",
            },
            5: {
              "IPS LCD Gaming Monitor": "IPS LCD Gaming Monitor",
              "An IPS LCD gaming monitor is a type of display that uses in-plane switching technology to deliver superior color accuracy and wide viewing angles. This type of monitor is ideal for gamers who want the best possible visual experience, as it offers vibrant colors, sharp images, and smooth motion.":
                "An IPS LCD gaming monitor is a type of display that uses in-plane switching technology to deliver superior color accuracy and wide viewing angles. This type of monitor is ideal for gamers who want the best possible visual experience, as it offers vibrant colors, sharp images, and smooth motion.",
            },
            6: {
              "AK-900 Wired Keyboard": "AK-900 Wired Keyboard",
              "The AK-900 Wired Keyboard is a high-quality and reliable peripheral designed for gamers and typists alike. This keyboard features a full-size layout with 104 keys, including a numeric keypad and function keys. The keys are designed to provide a responsive and tactile typing experience, with a 2mm travel distance and a 50 million keystroke lifespan.":
                "The AK-900 Wired Keyboard is a high-quality and reliable peripheral designed for gamers and typists alike. This keyboard features a full-size layout with 104 keys, including a numeric keypad and function keys. The keys are designed to provide a responsive and tactile typing experience, with a 2mm travel distance and a 50 million keystroke lifespan.",
            },
            7: {
              "Havic HV G-92 Gamepad": "Havic HV G-92 Gamepad",
              "The Havic HV G-92 Gamepad is a wired controller with a USB interface, designed for PC compatibility. It features a reliable 3D ergonomic design with built-in motors for dual vibration, providing an immersive gaming experience. The gamepad has a unique and delicate design, with 8 direction buttons, 12 action buttons, and 2 analog sticks.":
                "The Havic HV G-92 Gamepad is a wired controller with a USB interface, designed for PC compatibility. It features a reliable 3D ergonomic design with built-in motors for dual vibration, providing an immersive gaming experience. The gamepad has a unique and delicate design, with 8 direction buttons, 12 action buttons, and 2 analog sticks.",
            },
            8: {
              "PlayStation 5": "PlayStation 5",
              "Black and White version of the PS5 coming out on sale.":
                "Black and White version of the PS5 coming out on sale.",
            },
            9: {
              Perfume: "Perfume",
              "GUCCI INTENSE OUD EDP": "GUCCI INTENSE OUD EDP",
            },
            10: {
              Speakers: "Speakers",
              "Amazon wireless speakers": "Amazon wireless speakers",
            },
            11: {
              "Women’s Collections": "Women’s Collections",
              "Featured woman collections that give you another vibe.":
                "Featured woman collections that give you another vibe.",
            },
          },
          ProductDetails: {
            "AK-900 Wired Keyboard": "AK-900 Wired Keyboard",
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.":
              "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
            Colours: "Colours",
            Size: "Size",
            "Free Delivery": "Free Delivery",
            "Enter your postal code for Delivery Availability":
              "Enter your postal code for Delivery Availability",
            "Return Delivery": "Return Delivery",
            "Free 30 Days Delivery Returns.": "Free 30 Days Delivery Returns.",
            Reviews: "Reviews",
          },
          Features: {
            "FREE AND FAST DELIVERY": "FREE AND FAST DELIVERY",
            "MONEY BACK GUARANTEE": "MONEY BACK GUARANTEE",
            "24/7 CUSTOMER SERVICE": "24/7 CUSTOMER SERVICE",
            "Free delivery for all orders over $140":
              "Free delivery for all orders over $140",
            "Friendly 24/7 customer support": "Friendly 24/7 customer support",
            "We reurn money within 30 days": "We reurn money within 30 days",
          },
          Category: {
            Gaming: "Gaming",
            Phones: "Phones",
            Computers: "Computers",
            SmartWatch: "SmartWatch",
            Camera: "Camera",
            HeadPhones: "HeadPhones",
          },
          Contact: {
            "Call To Us": "Call To Us",
            "Write To US": "Write To US",
            Contact: "Contact",
            Phone: "Phone",
            Emails: "Emails",
            "We are available 24/7, 7 days a week.":
              "We are available 24/7, 7 days a week.",
            "Fill out our form and we will contact you within 24 hours.":
              "Fill out our form and we will contact you within 24 hours.",
            "Your Name": "Your Name",
            "Your Email": "Your Email",
            "Your Phone": "Your Phone",
            "Your Massage": "Your Massage",
            "Send Massage": "Send Massage",
          },
          About: {
            About: "About",
            "Our Story": "Our Story",
            "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.":
              " Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.",
            "Exclusive has more than 1 Million products to offer, growing at avery fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.":
              "Exclusive has more than 1 Million products to offer, growing at avery fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.",
            "Sellers active on our site": "Sellers active on our site",
            "Monthly Produduct Sale": "Monthly Produduct Sale",
            "Customer active in our site": "Customer active in our site",
            "Anual gross sale in our site": "Anual gross sale in our site",
            "Founder & Chairman": "Founder & Chairman",
            "Managing Director": "Managing Director",
            "Product Designer": "Product Designer",
            "Tom Cruise": "Tom Cruise",
            "Emma Watson": "Emma Watson",
            "Will Smith": "Will Smith",
          },
          Wishlist: {
            "Move All To Bag": "Move All To Bag",
            Wishlist: "Wishlist",
            "Just For You": "Just For You",
            "See All": "See All",
          },
          Cart: {
            Cart: "Cart",
            Product: "Product",
            Price: "Price",
            Quantity: "Quantity",
            Subtotal: "Subtotal",
            Shipping: "Shipping",
            Free: "Free",
            Total: "Total",
            "Return To Shop": "Return To Shop",
            "Update Cart": "Update Cart",
            "Cart Total": "Cart Total",
            "Procees to checkout": "Procees to checkout",
            "Apply Coupon": "Apply Coupon",
            "Coupon Code": "Coupon Code",
          },
          Checkout: {
            "Billing Details": "Billing Details",
            "First Name": "First Name",
            "Company Name": "Company Name",
            "Street Address": "Street Address",
            "Apartment, floor, etc. (optional)":
              "Apartment, floor, etc. (optional)",
            "Town/City": "Town/City",
            "Phone Number": "Phone Number",
            "Email Address": "Email Address",
            Bank: "Bank",
            "Cash on delivery": "Cash on delivery",
            "Place Order": "Place Order",
            "Save this information for faster check-out next time":
              "Save this information for faster check-out next time",
          },
          Acount: {
            "Welcome!": "Welcome!",
            "Loading...": "Loading...",
            "My Account": "My Account",
          },
          Profile: {
            "Edit Your Profile": "Edit Your Profile",
            "First Name": "First Name",
            "Last Name": "Last Name",
            Email: "Email",
            Address: "Address",
            "Password Changes": "Password Changes",
            "Current Passwod": "Current Passwod",
            "New Passwod": "New Passwod",
            "Confirm New Passwod": "Confirm New Passwod",
            "Save Changes": "Save Changes",
            Cancel: "Cancel",
          },
          Sidebar: {
            "Manage My Account": "Manage My Account",
            "My Profile": "My Profile",
            "Address Book": "Address Book",
            "My Payment Options": "My Payment Options",
            "My Returns": "My Returns",
            "My Cancellations": "My Cancellations",
            "My WishList": "My WishList",
            "My Orders": "My Orders",
          },
          Search: {
            "No results found": "No results found",
          },
          Buttons: {
            "Buy Now": "Buy Now",
            "View All": "View All",
            "View All Products": "View All Products",
          },
          Signup: {
            "Create an account": "Create an account",
            "Sign up with Google": "Sign up with Google",
            "Create Account Password": "Create Account Password",
            "Enter your details below": "Enter your details below",
            "Already have account?": "Already have account?",
            Name: "Name",
            "Email or Phone Number": "Email or Phone Number",
            Password: "Password",
            "Forget Password?": "Forget Password?",
            "Log in": "Log in",
          },
          Login: {
            "Log in to Exclusive": "Log in to Exclusive",
          },
          Review: {
            Reviews: "Reviews",
            "Your rate": "Your rate",
            "Write Feedback Please": "Write Feedback Please",
            "Add Review": "Add Review",
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.":
              "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
          },
          NotFound: {
            "404 Not Found": "404 Not Found",
            "Your visited page not found. You may go home page":
              "Your visited page not found. You may go home page",
            "Back to home page": "Back to home page",
          },
          Errors: {
            "auth/missing-password": "Please Enter Password",
            "auth/missing-email": "Please Enter Email",
            "auth/invalid-email": "Please Enter Email",
            "Please enter a valid email address or phone number.":
              "Please enter a valid email address or phone number.",
            "Check your email to reset password":
              "Check your email to reset password",
            "auth/invalid-credential": "Invalid Password",
            "auth/network-request-failed": "network-request-failed",
            "auth/weak-password": "weak password enter at least 6 numbers",
            "auth/email-already-in-use": "email already in use",
          },
          ShopNow: "Shop Now",
          Seconds: "Seconds",
          Minutes: "Minutes",
          Hours: "Hours",
          Days: "Days",

          Exclusive: "Exclusive",
          "Enhance Your Music Experience": "Enhance Your Music Experience",
          Titles: {
            "Today’s": "Today’s",
            "This Month": "This Month",
            "Flash Sales": "Flash Sales",
            Categories: "Categories",
            Featured: "Featured",
            "New Arrival": "New Arrival",
            "Our Products": "Our Products",
            "Browse By Category": "Browse By Category",
            "Best Selling Products": "Best Selling Products",
            "Explore Our Products": "Explore Our Products",
          },
        },
      },
      tr: {
        translation: {
          Navbar: {
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!":
              "Tüm Mayolarda Yaz İndirimi ve Ücretsiz Ekspres Teslimat - %50 İNDİRİM!",
            Arabic: "Arapça",
            English: "İngilizce",
            Home: "Ev",
            Contact: "Temas etmek",
            About: "Hakkında",
            "Sign Up": "Üye olmak",
            "What are you looking for?": "Ne arıyorsun?",
            Profile: {
              "Manage My Account": "Hesabımı yönet",
              "My Order": "Benim siparişim",
              "My Cancellations": "İptallerim",
              "My Reviews": "İncelemelerim",
              Logout: "Çıkış Yap",
            },
          },
          Footer: {
            Subscribe: "Abone",
            "Get 10% off your first order":
              "İlk siparişinizde %10 indirim kazanın",
            "Enter Your Email": "E-postanızı giriniz",
            Support: "Destek",
            "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.":
              "111 Bijoy sarani, Dakka, DH 1515, Bangladeş.",
            Account: "Hesap",
            "My Account": "Hesabım",
            Login: "Giriş yap",
            Register: "Kayıt ol",
            Cart: "Araba",
            Wishlist: "İstek listesi",
            Shop: "Mağaza",
            "Quick Link": "Hızlı link",
            "Privacy Policy": "Gizlilik Politikası",
            "Terms Of Use": "Kullanım Şartları",
            FAQ: "SSS",
            Contact: "Temas etmek",
            "Download App": "indir uygulaması",
            "Save $3 with App New User Only":
              "Yalnızca Yeni Kullanıcıya Özel Uygulamayla 3$ Tasarruf Edin",
            "Copyright Rimel 2022. All right reserved":
              "Telif Hakkı Rimel 2022. Tüm hakları saklıdır",
          },
          Home: {
            "Woman’s Fashion": "Kadın modası",
            "Men’s Fashion": "Erkek modası",
            Electronics: "Elektronik",
            "Home & Lifestyle": "Ev ve Yaşam Tarzı",
            Medicine: "İlaç",
            "Sports & Outdoor": "Spor ve Dış Mekan",
            "Baby’s & Toys": "Bebek ve Oyuncaklar",
            "Groceries & Pets": "Bakkaliye ve Evcil Hayvanlar",
            "Health & Beauty": "sağlık ve güzellik",
            "iPhone 14 Series": "iPhone 14 Serisi",
            "Up to 10% off Voucher": "%10'a varan indirim Kuponu",
          },
          Products: {
            "Add To Cart": "Sepete ekle",
            "Remove from Cart": "Sepetten Kaldır",
            0: {
              "HAVIT HV-G92 Gamepad": "HAVIT HV-G92 Oyun Kumandası",
              "The HAVIT HV-G92 Gamepad is a wired controller with a reliable 3D ergonomic design and built-in motors for dual vibration. It features a unique and delicate design with 8 direction buttons, 12 action buttons, and 2 analog sticks. The gamepad also has turbo and clear special functions, providing an immersive gaming experience.":
                "HAVIT HV-G92 Gamepad, güvenilir 3D ergonomik tasarıma ve çift titreşim için yerleşik motorlara sahip kablolu bir kumandadır. 8 yön düğmesi, 12 eylem düğmesi ve 2 analog çubukla benzersiz ve zarif bir tasarıma sahiptir. Gamepad ayrıca sürükleyici bir oyun deneyimi sağlayan turbo ve net özel işlevlere sahip.",
            },
            1: {
              "AK-900 Wired Keyboard": "AK-900 Kablolu Klavye",
              "The AK-900 Wired Keyboard is a high-quality gaming keyboard with a sleek and modern design. It features a wired USB connection for reliable and lag-free performance. The keyboard has a 104-key layout with a metal backlit for enhanced visibility and style.":
                "AK-900 Kablolu Klavye, şık ve modern tasarıma sahip, yüksek kaliteli bir oyun klavyesidir. Güvenilir ve gecikmesiz performans için kablolu bir USB bağlantısına sahiptir. Klavye, daha iyi görünürlük için metal arkadan aydınlatmalı 104 tuşlu bir düzene sahiptir. ve stil.",
            },
            2: {
              "Gucci duffle bag": "Gucci spor çantası",
              "The Gucci Duffle Bag is a classic and stylish piece of luggage that is perfect for a weekend getaway or a trip to the gym. It is crafted from the finest materials, with a durable and water-resistant coated canvas exterior that is accented by the iconic Gucci web stripe. The bag features leather trim and handles, as well as a detachable shoulder strap for easy carrying.":
                "Gucci Spor Çantası, hafta sonu kaçamağı veya spor salonu gezisi için mükemmel olan klasik ve şık bir bagajdır. En iyi malzemelerden üretilmiştir ve dayanıklı ve suya dayanıklı kaplamalı kanvas dış yüzeyi ile vurgulanmıştır. ikonik Gucci ağ şeridi Çantada deri kaplama ve sapların yanı sıra kolay taşıma için çıkarılabilir bir omuz askısı bulunuyor.",
            },
            3: {
              "The north coat": "Kuzey ceketi",
              "The North Face offers a wide range of winter coats for both men and women, designed to provide superior warmth and comfort in cold weather conditions. These coats are available in various styles and types, including down jackets, synthetic insulation jackets, parkas, and puffer jackets.":
                "The North Face, soğuk hava koşullarında üstün sıcaklık ve konfor sağlamak üzere tasarlanmış, hem erkekler hem de kadınlar için geniş bir kışlık mont yelpazesi sunuyor. Bu montlar kuş tüyü ceketler, sentetik yalıtımlı ceketler, parkalar ve parkalar dahil olmak üzere çeşitli stil ve türlerde mevcuttur. şişme ceketler.",
            },
            4: {
              "S-Series Comfort Chair": "S-Serisi Konforlu Sandalye",
              "The S-Series Comfort Chair is a high-quality ergonomic office chair designed to provide exceptional comfort and support for long hours of sitting. This chair is perfect for individuals who spend a significant amount of time working at a desk or computer.":
                "S Serisi Konfor Koltuğu, uzun saatler boyunca olağanüstü konfor ve destek sağlamak üzere tasarlanmış, yüksek kaliteli, ergonomik bir ofis koltuğudur. Bu sandalye, önemli miktarda zamanını masa veya bilgisayar başında çalışarak geçiren kişiler için mükemmeldir.",
            },
            5: {
              "IPS LCD Gaming Monitor": "IPS LCD Oyun Monitörü",
              "An IPS LCD gaming monitor is a type of display that uses in-plane switching technology to deliver superior color accuracy and wide viewing angles. This type of monitor is ideal for gamers who want the best possible visual experience, as it offers vibrant colors, sharp images, and smooth motion.":
                "IPS LCD oyun monitörü, üstün renk doğruluğu ve geniş izleme açıları sunmak için düzlem içi geçiş teknolojisini kullanan bir ekran türüdür. Bu tür monitörler, canlı renkler sunduğundan mümkün olan en iyi görsel deneyimi isteyen oyuncular için idealdir. keskin görüntüler ve akıcı hareket.",
            },
            6: {
              "AK-900 Wired Keyboard": "AK-900 Kablolu Klavye",
              "The AK-900 Wired Keyboard is a high-quality and reliable peripheral designed for gamers and typists alike. This keyboard features a full-size layout with 104 keys, including a numeric keypad and function keys. The keys are designed to provide a responsive and tactile typing experience, with a 2mm travel distance and a 50 million keystroke lifespan.":
                "AK-900 Kablolu Klavye, hem oyuncular hem de daktilo kullananlar için tasarlanmış yüksek kaliteli ve güvenilir bir çevre birimidir. Bu klavye, sayısal tuş takımı ve işlev tuşları da dahil olmak üzere 104 tuştan oluşan tam boyutlu bir düzene sahiptir. Tuşlar, duyarlı bir yanıt sağlamak üzere tasarlanmıştır. ve 2 mm'lik hareket mesafesi ve 50 milyon tuş vuruşu ömrüyle dokunsal yazma deneyimi.",
            },
            7: {
              "Havic HV G-92 Gamepad": "Havic HV G-92 Oyun Kumandası",
              "The Havic HV G-92 Gamepad is a wired controller with a USB interface, designed for PC compatibility. It features a reliable 3D ergonomic design with built-in motors for dual vibration, providing an immersive gaming experience. The gamepad has a unique and delicate design, with 8 direction buttons, 12 action buttons, and 2 analog sticks.":
                "Havic HV G-92 Gamepad, PC uyumluluğu için tasarlanmış, USB arayüzlü kablolu bir kumandadır. Çift titreşim için dahili motorlarla güvenilir bir 3D ergonomik tasarıma sahiptir ve sürükleyici bir oyun deneyimi sağlar. Gamepad, benzersiz ve 8 yön düğmesi, 12 eylem düğmesi ve 2 analog çubukla zarif tasarım.",
            },
            8: {
              "PlayStation 5": "PlayStation 5",
              "Black and White version of the PS5 coming out on sale.":
                "PS5'in Siyah Beyaz versiyonu satışa çıkıyor.",
            },
            9: {
              Perfume: "Perfume",
              "GUCCI INTENSE OUD EDP": "GUCCI YOĞUN OUD EDP",
            },
            10: {
              Speakers: "Speakers",
              "Amazon wireless speakers": "Amazon kablosuz hoparlörler",
            },
            11: {
              "Women’s Collections": "Women’s Collections",
              "Featured woman collections that give you another vibe.":
                "Size başka bir hava katacak öne çıkan kadın koleksiyonları.",
            },
          },
          ProductDetails: {
            "AK-900 Wired Keyboard": "AK-900 Kablolu Klavye",
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.":
              "PlayStation 5 Kumanda Dış Görünümü Kolay kabarcıksız kurulum ve bulaşmadan çıkarma için hava kanalı yapışkanlı yüksek kaliteli vinil Basınca duyarlı.",
            Colours: "Renkler",
            Size: "Boyut",
            "Free Delivery": "Ücretsiz teslimat",
            "Enter your postal code for Delivery Availability":
              "Teslimat Durumu için posta kodunuzu girin",
            "Return Delivery": "İade Teslimatı",
            "Free 30 Days Delivery Returns.":
              "30 Günde Ücretsiz Teslimat İade.",
            Reviews: "Yorumlar",
          },
          Features: {
            "FREE AND FAST DELIVERY": "ÜCRETSİZ VE HIZLI TESLİMAT",
            "MONEY BACK GUARANTEE": "PARA İADE GARANTİSİ",
            "24/7 CUSTOMER SERVICE": "7/24 MÜŞTERİ HİZMETLERİ",
            "Free delivery for all orders over $140":
              "140$ üzeri tüm siparişlerde ücretsiz teslimat",
            "Friendly 24/7 customer support": "Dostça 7/24 müşteri desteği",
            "We reurn money within 30 days":
              "30 gün içinde parayı iade ediyoruz",
          },
          Category: {
            Gaming: "Oyun",
            Phones: "Telefonlar",
            Computers: "Bilgisayarlar",
            SmartWatch: "Akıllı saat",
            Camera: "Kamera",
            HeadPhones: "Kulaklıklar",
          },
          Contact: {
            "Call To Us": "Bizi Arayın",
            "Write To US": "Bize yazın",
            Contact: "Temas etmek",
            Phone: "Telefon",
            Emails: "E-postalar",
            "We are available 24/7, 7 days a week.":
              "Haftanın 7 günü 24/7 hizmetinizdeyiz.",
            "Fill out our form and we will contact you within 24 hours.":
              "Formumuzu doldurun, 24 saat içinde sizinle iletişime geçeceğiz.",
            "Your Name": "Adınız",
            "Your Email": "E-posta adresiniz",
            "Your Phone": "Telefonunuz",
            "Your Massage": "Masajınız",
            "Send Massage": "Masaj Gönder",
          },
          About: {
            About: "Hakkında",
            "Our Story": "Bizim hikayemiz",
            "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.":
              " 2015 yılında kurulan Exclusive, Bangladeş'te aktif varlığıyla Güney Asya'nın önde gelen çevrimiçi alışveriş pazarıdır. Çok çeşitli özel pazarlama, veri ve hizmet çözümleriyle desteklenen Exclusive'in 10.500 satıcısı ve 300 markası var ve bölge genelinde 3 milyon müşteriye hizmet veriyor.",
            "Exclusive has more than 1 Million products to offer, growing at avery fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.":
              "Exclusive'in sunabileceği 1 Milyondan fazla ürün var ve çok hızlı bir şekilde büyüyor. Exclusive, tüketiciden tüketiciye kadar uzanan kategorilerde geniş bir ürün yelpazesi sunar.",
            "Sellers active on our site": "Sitemizde aktif olan satıcılar",
            "Monthly Produduct Sale": "Aylık Ürün Satışı",
            "Customer active in our site": "Sitemizde aktif müşteri",
            "Anual gross sale in our site": "Sitemizde yıllık brüt satış",
            "Founder & Chairman": "Kurucu ve Başkan",
            "Managing Director": "Genel müdür",
            "Product Designer": "Ürün tasarımcısı",
            "Tom Cruise": "Tom Cruise",
            "Emma Watson": "Emma Watson",
            "Will Smith": "Will Smith",
          },
          Wishlist: {
            "Move All To Bag": "Hepsini Çantaya Taşı",
            Wishlist: "İstek listesi",
            "Just For You": "Sadece senin için",
            "See All": "Hepsini gör",
          },
          Cart: {
            Cart: "Araba",
            Product: "Ürün",
            Price: "Fiyat",
            Quantity: "Miktar",
            Subtotal: "ara toplam",
            Shipping: "Nakliye",
            Free: "Özgür",
            Total: "Toplam",
            "Return To Shop": "Mağazaya Geri Dön",
            "Update Cart": "Sepeti Güncelle",
            "Cart Total": "Sepet Toplamı",
            "Procees to checkout": "Ödeme işlemine geçiliyor",
            "Apply Coupon": "kuponu onayla",
            "Coupon Code": "Kupon Kodu",
          },
          Checkout: {
            "Billing Details": "Fatura Detayları",
            "First Name": "İlk adı",
            "Company Name": "Firma Adı",
            "Street Address": "Açık adres",
            "Apartment, floor, etc. (optional)":
              "Daire, kat vb. (isteğe bağlı)",
            "Town/City": "Kasaba/Şehir",
            "Phone Number": "Telefon numarası",
            "Email Address": "E-posta Adresi",
            Bank: "Banka",
            "Cash on delivery": "Kapıda ödeme",
            "Place Order": "Sipariş Vermek",
            "Save this information for faster check-out next time":
              "Bir dahaki sefere daha hızlı çıkış yapmak için bu bilgiyi kaydedin",
          },
          Acount: {
            "Welcome!": "Hoş geldin!",
            "Loading...": "Yükleniyor...",
            "My Account": "Hesabım",
          },
          Profile: {
            "Edit Your Profile": "Profilinizi düzenleyin",
            "First Name": "İlk adı",
            "Last Name": "Soy isim",
            Email: "E-posta",
            Address: "Adres",
            "Password Changes": "Şifre Değişiklikleri",
            "Current Passwod": "Mevcut Şifre",
            "New Passwod": "Yeni Şifre",
            "Confirm New Passwod": "Yeni Parolayı Onayla",
            "Save Changes": "Değişiklikleri Kaydet",
            Cancel: "İptal etmek",
          },
          Sidebar: {
            "Manage My Account": "Hesabımı yönet",
            "My Profile": "Benim profilim",
            "Address Book": "Adres defteri",
            "My Payment Options": "Ödeme Seçeneklerim",
            "My Returns": "İadelerim",
            "My Cancellations": "İptallerim",
            "My WishList": "Benim dilek listem",
            "My Orders": "Siparişlerim",
          },
          Search: {
            "No results found": "Sonuç bulunamadı",
          },
          Buttons: {
            "Buy Now": "Şimdi al",
            "View All": "Hepsini gör",
            "View All Products": "Tüm Ürünleri Görüntüle",
          },
          Signup: {
            "Create an account": "Bir hesap oluşturun",
            "Sign up with Google": "Google'a kaydolun",
            "Create Account Password": "Hesap Şifresi Oluştur",
            "Enter your details below": "Aşağıya bilgilerinizi girin",
            "Already have account?": "Zaten hesabınız var mı?",
            Name: "İsim",
            "Email or Phone Number": "E-posta veya Telefon Numarası",
            Password: "Şifre",
            "Forget Password?": "Şifreyi unut?",
            "Log in": "Giriş yapmak",
          },
          Login: {
            "Log in to Exclusive": "Exclusive'e giriş yapın",
          },
          Review: {
            Reviews: "Yorumlar",
            "Your rate": "Oranınız",
            "Write Feedback Please": "Geri Bildirim Yazın Lütfen",
            "Add Review": "İnceleme Ekle",
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.":
              "PlayStation 5 Kumanda Dış Görünümü Kolay kabarcıksız kurulum ve bulaşmadan çıkarma için hava kanalı yapışkanlı yüksek kaliteli vinil Basınca duyarlı.",
          },
          NotFound: {
            "404 Not Found": "404 Bulunamadı",
            "Your visited page not found. You may go home page":
              "Ziyaret ettiğiniz sayfa bulunamadı. Ana sayfaya gidebilirsiniz",
            "Back to home page": "Ana sayfaya geri dön",
          },
          Errors: {
            "auth/missing-password": "Lütfen şifre giriniz",
            "auth/invalid-email": "Lütfen e-posta giriniz",
            "auth/missing-email": "Lütfen e-posta giriniz",
            "Check your email to reset password":
              "Şifrenizi sıfırlamak için e-postanızı kontrol edin",
            "Please enter a valid email address or phone number.":
              "Lütfen geçerli bir e-posta adresi veya telefon numarası girin.",
            "auth/invalid-credential": "geçersiz şifre",
            "auth/network-request-failed": "ağ isteği başarısız oldu",
            "auth/weak-password": "zayıf şifre en az 6 rakam girin",
            "auth/email-already-in-use": "e-posta zaten kullanılıyor",
          },
          ShopNow: "Şimdi satın al",
          Seconds: "Saniye",
          Minutes: "dakika",
          Hours: "Saat",
          Days: "Günler",

          Exclusive: "Özel",
          "Enhance Your Music Experience": "Müzik Deneyiminizi Geliştirin",
          Titles: {
            "Today’s": "Bugünün",
            "This Month": "Bu ay",
            "Flash Sales": "Flaş Satışlar",
            Categories: "Kategoriler",
            Featured: "Öne Çıkanlar",
            "New Arrival": "Yeni gelen",
            "Our Products": "Bizim ürünlerimiz",
            "Browse By Category": "Kategoriye Göre Gözat",
            "Best Selling Products": "En Çok Satan Ürünler",
            "Explore Our Products": "Ürünlerimizi Keşfedin",
          },
        },
      },
      ar: {
        translation: {
          Navbar: {
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!":
              "تخفيضات الصيف على جميع بدلات السباحة والتوصيل السريع المجاني - خصم 50%!",
            Arabic: "اللغة العربية",
            English: "اللغة الانجليزية",
            Turkish: "اللغة التركية",
            Home: "الصفحة الرئيسية",
            Contact: "تواصل معنا",
            About: "من نحن",
            "Sign Up": "انشاء حساب",
            "What are you looking for?": "ما الذي تبحث عنه؟",
            Profile: {
              "Manage My Account": "ادارة حسابى",
              "My Order": "طلباتى",
              "My Cancellations": "مجموعاتى",
              "My Reviews": "تقيماتى",
              Logout: "تسجيل الخروج",
            },
          },
          Footer: {
            Subscribe: "اشترك",
            "Get 10% off your first order": "احصل على خصم 10% على طلبك الأول",
            "Enter Your Email": "ادخل بريدك الالكترونى",
            Support: "الدعم",
            "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.":
              "111 بيجوي ساراني، دكا، DH 1515، بنغلاديش",
            Account: "الحساب",
            "My Account": "حسابى",
            Login: "تسجيل الدخول",
            Register: "انشاء حساب",
            Cart: "سلة المشتريات",
            Wishlist: "قائمة المفضلات",
            Shop: "تسوق",
            "Quick Link": "رابط سريع",
            "Privacy Policy": "سياسة الخصوصية",
            "Terms Of Use": "شروط الاستخدام",
            FAQ: "التعليمات",
            Contact: "اتصل بنا",
            "Download App": "تحميل التطبيق",
            "Save $3 with App New User Only":
              "وفر 3 دولارات مع التطبيق للمستخدم الجديد فقط",
            "Copyright Rimel 2022. All right reserved":
              "حقوق الطبع والنشر لريمل 2022. جميع الحقوق محفوظة",
          },
          Home: {
            "Woman’s Fashion": "على الموضة للنساء",
            "Men’s Fashion": "أزياء رجالية",
            Electronics: "إلكترونيات",
            "Home & Lifestyle": "المنزل ونمط الحياة",
            Medicine: "طبى",
            "Sports & Outdoor": "الرياضة",
            "Baby’s & Toys": "ألعاب ومستلزمات الأطفال",
            "Groceries & Pets": "البقالة والحيوانات الأليفة",
            "Health & Beauty": "الصحة والجمال",
            "iPhone 14 Series": "سلسلة ايفون 14",
            "Up to 10% off Voucher": "قسيمة خصم تصل إلى 10%",
          },
          Products: {
            "Add To Cart": "اضف الى السلة",
            "Remove from Cart": "احذف من السلة",
            0: {
              "HAVIT HV-G92 Gamepad": "لوحة ألعاب هافيت HV-G92",
              "The HAVIT HV-G92 Gamepad is a wired controller with a reliable 3D ergonomic design and built-in motors for dual vibration. It features a unique and delicate design with 8 direction buttons, 12 action buttons, and 2 analog sticks. The gamepad also has turbo and clear special functions, providing an immersive gaming experience.":
                "لوحة الألعاب HAVIT HV-G92 عبارة عن وحدة تحكم سلكية ذات تصميم مريح ثلاثي الأبعاد ومحركات مدمجة للاهتزاز المزدوج. وتتميز بتصميم فريد ودقيق مع 8 أزرار اتجاه و12 زر عمل و2 عصا تناظرية. لوحة الألعاب أيضًا يتمتع بوظائف خاصة توربو وواضحة، مما يوفر تجربة لعب غامرة.",
            },
            1: {
              "AK-900 Wired Keyboard": "لوحة مفاتيح سلكية AK-900",
              "The AK-900 Wired Keyboard is a high-quality gaming keyboard with a sleek and modern design. It features a wired USB connection for reliable and lag-free performance. The keyboard has a 104-key layout with a metal backlit for enhanced visibility and style.":
                "لوحة المفاتيح السلكية AK-900 هي لوحة مفاتيح ألعاب عالية الجودة ذات تصميم أنيق وعصري. وتتميز بوصلة USB سلكية لأداء موثوق وخالي من التأخر. تتميز لوحة المفاتيح بتصميم مكون من 104 مفاتيح مع إضاءة خلفية معدنية لتعزيز الرؤية والأسلوب.",
            },
            2: {
              "Gucci duffle bag": "حقيبة غوتشي واق من المطر",
              "The Gucci Duffle Bag is a classic and stylish piece of luggage that is perfect for a weekend getaway or a trip to the gym. It is crafted from the finest materials, with a durable and water-resistant coated canvas exterior that is accented by the iconic Gucci web stripe. The bag features leather trim and handles, as well as a detachable shoulder strap for easy carrying.":
                "إن حقيبة Gucci Duffle هي قطعة أمتعة كلاسيكية وأنيقة مثالية لقضاء عطلة نهاية الأسبوع أو رحلة إلى صالة الألعاب الرياضية. إنها مصنوعة من أجود المواد، مع قماش خارجي متين ومقاوم للماء ومزين بالقماش. تتميز الحقيبة بشريط ويب غوتشي المميز ومقابض ومقابض جلدية، بالإضافة إلى حزام كتف قابل للفصل لسهولة الحمل.",
            },
            3: {
              "The north coat": "معطف",
              "The North Face offers a wide range of winter coats for both men and women, designed to provide superior warmth and comfort in cold weather conditions. These coats are available in various styles and types, including down jackets, synthetic insulation jackets, parkas, and puffer jackets.":
                "تقدم ذا نورث فيس مجموعة واسعة من المعاطف الشتوية للرجال والنساء على حد سواء، والمصممة لتوفير الدفء والراحة الفائقة في الظروف الجوية الباردة. وتتوفر هذه المعاطف في أنماط وأنواع مختلفة، بما في ذلك السترات الواقية من الرصاص، والسترات العازلة الاصطناعية، والسترات، والسترات الواقية من الرصاص. السترات المنتفخة.",
            },
            4: {
              "S-Series Comfort Chair": "كرسي مريح من سلسلة S",
              "The S-Series Comfort Chair is a high-quality ergonomic office chair designed to provide exceptional comfort and support for long hours of sitting. This chair is perfect for individuals who spend a significant amount of time working at a desk or computer.":
                "إن كرسي S-Series Comfort هو كرسي مكتب مريح وعالي الجودة مصمم لتوفير راحة ودعم استثنائيين لساعات طويلة من الجلوس. هذا الكرسي مثالي للأفراد الذين يقضون قدرًا كبيرًا من الوقت في العمل على المكتب أو الكمبيوتر.",
            },
            5: {
              "IPS LCD Gaming Monitor": "شاشة ألعاب IPS LCD",
              "An IPS LCD gaming monitor is a type of display that uses in-plane switching technology to deliver superior color accuracy and wide viewing angles. This type of monitor is ideal for gamers who want the best possible visual experience, as it offers vibrant colors, sharp images, and smooth motion.":
                "إن شاشة الألعاب IPS LCD هي نوع من شاشات العرض التي تستخدم تقنية التبديل داخل الطائرة لتوفير دقة ألوان فائقة وزوايا مشاهدة واسعة. يعد هذا النوع من الشاشات مثاليًا للاعبين الذين يريدون أفضل تجربة بصرية ممكنة، حيث أنها توفر ألوانًا نابضة بالحياة، صور حادة، وحركة سلسة.",
            },
            6: {
              "AK-900 Wired Keyboard": "لوحة مفاتيح سلكية AK-900",
              "The AK-900 Wired Keyboard is a high-quality and reliable peripheral designed for gamers and typists alike. This keyboard features a full-size layout with 104 keys, including a numeric keypad and function keys. The keys are designed to provide a responsive and tactile typing experience, with a 2mm travel distance and a 50 million keystroke lifespan.":
                "لوحة المفاتيح السلكية AK-900 عبارة عن جهاز طرفي عالي الجودة وموثوق مصمم للاعبين والكتابين على حد سواء. تتميز لوحة المفاتيح هذه بتصميم كامل الحجم مع 104 مفاتيح، بما في ذلك لوحة مفاتيح رقمية ومفاتيح الوظائف. تم تصميم المفاتيح لتوفير استجابة سريعة وتجربة الكتابة عن طريق اللمس، مع مسافة انتقال تبلغ 2 ملم وعمر افتراضي يصل إلى 50 مليون ضغطة مفتاح.",
            },
            7: {
              "Havic HV G-92 Gamepad": "لوحة تحكم هافيك HV G-92",
              "The Havic HV G-92 Gamepad is a wired controller with a USB interface, designed for PC compatibility. It features a reliable 3D ergonomic design with built-in motors for dual vibration, providing an immersive gaming experience. The gamepad has a unique and delicate design, with 8 direction buttons, 12 action buttons, and 2 analog sticks.":
                "لوحة الألعاب Havic HV G-92 عبارة عن وحدة تحكم سلكية مزودة بواجهة USB، مصممة للتوافق مع جهاز الكمبيوتر. وتتميز بتصميم مريح ثلاثي الأبعاد موثوق به مع محركات مدمجة للاهتزاز المزدوج، مما يوفر تجربة ألعاب غامرة. تتميز لوحة الألعاب بتصميم فريد و تصميم دقيق، مع 8 أزرار اتجاه، و12 زر عمل، و2 عصا تناظرية.",
            },
            8: {
              "PlayStation 5": "العاب الفيديو",
              "Black and White version of the PS5 coming out on sale.":
                "النسخة باللونين الأبيض والأسود من PS5 معروضة للبيع",
            },
            9: {
              Perfume: "عطر",
              "GUCCI INTENSE OUD EDP": "عطر غوتشي انتنس عود",
            },
            10: {
              Speakers: "مكبرات الصوت",
              "Amazon wireless speakers": "مكبرات الصوت اللاسلكية من أمازون",
            },
            11: {
              "Women’s Collections": "مجموعات نسائية",
              "Featured woman collections that give you another vibe.":
                "مجموعات نسائية مميزة تمنحك أجواءً أخرى.",
            },
          },
          ProductDetails: {
            "AK-900 Wired Keyboard": "لوحة مفاتيح سلكية AK-900",
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.":
              "غلاف وحدة تحكم بلايستيشن 5 مصنوع من الفينيل عالي الجودة مع لاصق قناة هوائية لسهولة التركيب بدون فقاعات وإزالة خالية من الفوضى، حساس للضغط.",
            Colours: "الألوان",
            Size: "الحجم",
            "Free Delivery": "توصيل مجاني",
            "Enter your postal code for Delivery Availability":
              "أدخل الرمز البريدي الخاص بك لتوفر التسليم",
            "Return Delivery": "تسليم العودة",
            "Free 30 Days Delivery Returns.": "إرجاع مجاني خلال 30 يومًا.",
            Reviews: "التعليقات",
          },
          Features: {
            "FREE AND FAST DELIVERY": "توصيل مجاني وسريع",
            "MONEY BACK GUARANTEE": "ضمان استعادة الاموال",
            "24/7 CUSTOMER SERVICE": "خدمة العملاء 24/7",
            "Free delivery for all orders over $140":
              "التوصيل مجاني لجميع الطلبات التي تزيد قيمتها عن 140 دولارًا",
            "Friendly 24/7 customer support":
              "دعم عملاء ودود على مدار 24 ساعة طوال أيام الأسبوع",
            "We reurn money within 30 days":
              "نقوم بإرجاع الأموال خلال 30 يومًا",
          },
          Category: {
            Gaming: "الألعاب",
            Phones: "الهواتف",
            Computers: "أجهزة الكمبيوتر",
            SmartWatch: "ساعة ذكية",
            Camera: "آلة تصوير",
            HeadPhones: "سماعات الرأس",
          },
          Contact: {
            "Call To Us": "اتصل بنا",
            "Write To US": "اكتب لنا",
            Contact: "التواصل",
            Phone: "هاتف",
            Emails: "البريد الالكترونى",
            "We are available 24/7, 7 days a week.":
              "نحن متواجدون 24/7، 7 أيام في الأسبوع.",
            "Fill out our form and we will contact you within 24 hours.":
              "املأ النموذج الخاص بنا وسوف نتصل بك خلال 24 ساعة.",
            "Your Name": "اسمك",
            "Your Email": "بريدك الالكترونى",
            "Your Phone": "تليفونك",
            "Your Massage": "رسالتك",
            "Send Massage": "ارسال الرسالة",
          },
          About: {
            About: "من نحن",
            "Our Story": "معلومات عننا",
            "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.":
              " تم إطلاق موقع Exclusive في عام 2015، وهو الأول عبر الإنترنت في جنوب آسيا سوق التسوق مع وجود نشط في بنغلاديش.",
            "Exclusive has more than 1 Million products to offer, growing at avery fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.":
              "لدى شركة Exclusive أكثر من مليون منتج لتقدمه، وتنمو بمعدل سريع جدا. عروض حصرية تشكيلة متنوعة في فئات تتراوح بين المستهلك.",
            "Sellers active on our site": "البائعون النشطون على موقعنا",
            "Monthly Produduct Sale": "مبيعات المنتجات الشهرية",
            "Customer active in our site": "العميل النشط في موقعنا",
            "Anual gross sale in our site": "إجمالي البيع السنوي في موقعنا",
            "Founder & Chairman": "مؤسس ورئيس مجلس الإدارة",
            "Managing Director": "المدير العام",
            "Product Designer": "مصمم المنتج",
            "Tom Cruise": "توم كروز",
            "Emma Watson": "إيما واتسون",
            "Will Smith": "ويل سميث",
          },
          Wishlist: {
            "Move All To Bag": "نقل الكل إلى السلة",
            Wishlist: "المفضلات",
            "Just For You": "منتجات لك",
            "See All": "كل المنتجات ",
          },
          Cart: {
            Cart: "السلة",
            Product: "المنتج",
            Price: "السعر",
            Quantity: "الكمية",
            Subtotal: "المجموع الفرعي",
            Shipping: "الشحن",
            Free: "مجانى",
            Total: "المجموع الكلى",
            "Return To Shop": " الرجوع الى التسوق",
            "Update Cart": "تحديث السلة",
            "Cart Total": "مجموع السلة",
            "Procees to checkout": "الذهاب الى الدفع",
            "Apply Coupon": "تنفيذ الكوبون",
            "Coupon Code": "رمز الكوبون",
          },
          Checkout: {
            "Billing Details": "تفاصيل الفاتورة",
            "First Name": "الاسم الاول",
            "Company Name": "اسم الشركة",
            "Street Address": "عنوان الشارع",
            "Apartment, floor, etc. (optional)": "شقة، طابق، الخ (اختياري)",
            "Town/City": "بلدة/مدينة",
            "Phone Number": "رقم الموبايل",
            "Email Address": "البريد الالكترونى",
            Bank: "البنك",
            "Cash on delivery": "الدفع عند الاستلام",
            "Place Order": "اطلب الطلب",
            "Save this information for faster check-out next time":
              " احفظ هذه المعلومات لتسجيل المغادرة بشكل أسرع في المرة القادمة",
          },
          Acount: {
            "Welcome!": "مرحبا!",
            "Loading...": "تحميل...",
            "My Account": "حسابى",
          },
          Profile: {
            "Edit Your Profile": "تعديل ملفك الشخصى",
            "First Name": "الاسم الاول",
            "Last Name": "الاسم الاخير",
            Email: "البريد الالكترونى",
            Address: "العنوان",
            "Password Changes": "تغييرات كلمة المرور",
            "Current Passwod": "كلمة المرور الحالية",
            "New Passwod": "كلمة المرور الجديدة",
            "Confirm New Passwod": "تاكيد كلمة المرور الجديدة",
            "Save Changes": "حفظ التغييرات",
            Cancel: "الغاء",
          },
          Sidebar: {
            "Manage My Account": "ادارة حسابى",
            "My Profile": "ملفى الشخصى",
            "Address Book": "دليل العناوين",
            "My Payment Options": "خيارات الدفع الخاصة بي",
            "My Returns": "إرجاعاتي",
            "My Cancellations": "الإلغاءات الخاصة بي",
            "My WishList": "مفضلاتى",
            "My Orders": "طلباتي",
          },
          Search: {
            "No results found": "لا يوجد نتائج بحث",
          },
          Buttons: {
            "Buy Now": "اشتري الآن",
            "View All": "عرض الكل",
            "View All Products": "عرض كافة المنتجات",
          },
          Signup: {
            "Create an account": "إنشاء حساب",
            "Sign up with Google": "قم بالتسجيل مع جوجل",
            "Create Account Password": "إنشاء كلمة مرور الحساب",
            "Enter your details below": "أدخل التفاصيل الخاصة بك",
            "Already have account?": "هل لديك حساب بالفعل؟ ",
            Name: "الاسم",
            "Email or Phone Number": "البريد الإلكتروني أو رقم الهاتف",
            Password: "كلمة المرور",
            "Forget Password?": "نسيت كلمة المرور؟",
            "Log in": "تسجيل الدخول",
          },
          Login: {
            "Log in to Exclusive": "تسجيل الدخول إلى الحصري",
          },
          Review: {
            Reviews: "التقييمات",
            "Your rate": "تقييمك",
            "Write Feedback Please": "اكتب تقييمك من فضلك",
            "Add Review": "اضافة تقييم",
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.":
              "غلاف وحدة تحكم بلايستيشن 5 مصنوع من الفينيل عالي الجودة مع لاصق قناة هوائية لسهولة التركيب بدون فقاعات وإزالة خالية من الفوضى، حساس للضغط.",
          },
          NotFound: {
            "404 Not Found": "404 غير موجود",
            "Your visited page not found. You may go home page":
              "لم يتم العثور على الصفحة التي قمت بزيارتها. يمكنك الذهاب إلى الصفحة الرئيسية",
            "Back to home page": "العودة إلى الصفحة الرئيسية",
          },
          Errors: {
            "auth/missing-password": "من فضلك ادخل كلمة المرور",
            "auth/missing-email": "من فضلك ادخل البريد الالكترونى",
            "auth/invalid-email": "من فضلك ادخل البريد الالكترونى",
            "Please enter a valid email address or phone number.":
              "الرجاء إدخال عنوان بريد إلكتروني صالح أو رقم هاتف.",
            "Check your email to reset password":
              "تحقق من بريدك الإلكتروني لإعادة تعيين كلمة المرور",
            "auth/invalid-credential": "كلمة المرور خطا",
            "auth/network-request-failed": "فشل طلب الشبكة",
            "auth/weak-password": "كلمة المرور ضعيفة أدخل على الأقل ارقام 6",
            "auth/email-already-in-use": "البريد الالكتروني مستخدم بالفعل",
          },
          ShopNow: "تسوق الان",
          Seconds: "الثوانى",
          Minutes: "الدقائق",
          Hours: "الساعات",
          Days: "الايام",

          Exclusive: "حصري",
          "Enhance Your Music Experience": "تعزيز تجربة الموسيقى الخاصة بك",
          Titles: {
            "Today’s": "اليوم",
            "This Month": "هذا الشهر",
            "Flash Sales": "مبيعات فلاش",
            Categories: "فئات",
            Featured: "متميز",
            "New Arrival": "قادم جديد",
            "Our Products": "منتجاتنا",
            "Browse By Category": "تصفح حسب الفئة",
            "Best Selling Products": "أفضل المنتجات مبيعا",
            "Explore Our Products": "اكتشف منتجاتنا",
          },
        },
      },
    },
  });

export default i18n;
