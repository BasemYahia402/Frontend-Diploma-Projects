import { db, storage } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

// Function to getImageUrl from Cloud Storage
const getImageUrl = async (imageName) => {
  try {
    const storageRef = ref(storage, "images/" + imageName);
    const imageUrl = await getDownloadURL(storageRef);
    console.log("Image URL:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.log("Error getting image URL:", error);
    return null;
  }
};

// Function to add products to Firestore
const addProductsToFirestore = async (products) => {
  const productsCollection = collection(db, "products");
  products.forEach(async (product) => {
    try {
      // get image URL
      const imageURL = await getImageUrl(product.img);
      for (let index = 0; index < product.imgGallary.length; index++) {
        const img = product.imgGallary[index];
        const imageURL = await getImageUrl(img);
        product.imgGallary[index] = imageURL;
      }

      // Add imageURL to product data
      product.img = imageURL;

      // Add product to Firestore
      const docRef = await addDoc(productsCollection, product);
      console.log("Product added:", product, docRef.id);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  });
};

// Sample products data
const productsData = [
  {
    id: 0,
    img: "card1.png",
    imgGallary: ["card1.png", "card1.png", "card1.png", "card1.png"],
    title: "HAVIT HV-G92 Gamepad",
    description:
      "The HAVIT HV-G92 Gamepad is a wired controller with a reliable 3D ergonomic design and built-in motors for dual vibration. It features a unique and delicate design with 8 direction buttons, 12 action buttons, and 2 analog sticks. The gamepad also has turbo and clear special functions, providing an immersive gaming experience.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: true,
    isWish: false,
    isCart: false,
  },
  {
    id: 1,
    img: "card2.png",
    imgGallary: ["card2.png", "card2.png", "card2.png", "card2.png"],
    title: "AK-900 Wired Keyboard",
    description:
      "The AK-900 Wired Keyboard is a high-quality gaming keyboard with a sleek and modern design. It features a wired USB connection for reliable and lag-free performance. The keyboard has a 104-key layout with a metal backlit for enhanced visibility and style.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: true,
    isWish: false,
    isCart: false,
  },
  {
    id: 2,
    img: "card3.png",
    imgGallary: ["card3.png", "card3.png", "card3.png", "card3.png"],
    title: "Gucci duffle bag",
    description:
      "The Gucci Duffle Bag is a classic and stylish piece of luggage that is perfect for a weekend getaway or a trip to the gym. It is crafted from the finest materials, with a durable and water-resistant coated canvas exterior that is accented by the iconic Gucci web stripe. The bag features leather trim and handles, as well as a detachable shoulder strap for easy carrying.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 3,
    img: "card4.png",
    imgGallary: ["card4.png", "card4.png", "card4.png", "card4.png"],
    title: "The north coat",
    description:
      "The North Face offers a wide range of winter coats for both men and women, designed to provide superior warmth and comfort in cold weather conditions. These coats are available in various styles and types, including down jackets, synthetic insulation jackets, parkas, and puffer jackets.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 4,
    img: "card5.png",
    imgGallary: ["card5.png", "card5.png", "card5.png", "card5.png"],
    title: "S-Series Comfort Chair",
    description:
      "The S-Series Comfort Chair is a high-quality ergonomic office chair designed to provide exceptional comfort and support for long hours of sitting. This chair is perfect for individuals who spend a significant amount of time working at a desk or computer.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 5,
    img: "card6.png",
    imgGallary: ["card6.png", "card6.png", "card6.png", "card6.png"],
    title: "IPS LCD Gaming Monitor",
    description:
      "An IPS LCD gaming monitor is a type of display that uses in-plane switching technology to deliver superior color accuracy and wide viewing angles. This type of monitor is ideal for gamers who want the best possible visual experience, as it offers vibrant colors, sharp images, and smooth motion.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 6,
    img: "card7.png",
    imgGallary: ["card7.png", "card7.png", "card7.png", "card7.png"],
    title: "AK-900 Wired Keyboard",
    description:
      "The AK-900 Wired Keyboard is a high-quality and reliable peripheral designed for gamers and typists alike. This keyboard features a full-size layout with 104 keys, including a numeric keypad and function keys. The keys are designed to provide a responsive and tactile typing experience, with a 2mm travel distance and a 50 million keystroke lifespan.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 7,
    img: "card8.png",
    imgGallary: ["image1.png", "image2.png", "image3.png", "image4.png"],
    title: "Havic HV G-92 Gamepad",
    description: "The Havic HV G-92 Gamepad is a wired controller with a USB interface, designed for PC compatibility. It features a reliable 3D ergonomic design with built-in motors for dual vibration, providing an immersive gaming experience. The gamepad has a unique and delicate design, with 8 direction buttons, 12 action buttons, and 2 analog sticks.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 8,
    img: "card9.svg",
    imgGallary: ["card9.svg", "card9.svg", "card9.svg", "card9.svg"],
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 9,
    img: "card10.svg",
    imgGallary: ["card10.svg", "card10.svg", "card10.svg", "card10.svg"],
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 10,
    img: "card11.svg",
    imgGallary: ["card11.svg", "card11.svg", "card11.svg", "card11.svg"],
    title: "Speakers",
    description: "Amazon wireless speakers",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
  {
    id: 11,
    img: "card12.png",
    imgGallary: ["card12.png", "card12.png", "card12.png", "card12.png"],
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    newPrice: "$120",
    oldPrice: "$160",
    quantity: 0,
    rate: [],
    dicound: "-40%",
    isNew: false,
    isWish: false,
    isCart: false,
  },
];
// Call the function to add products to Firestore
addProductsToFirestore(productsData);
