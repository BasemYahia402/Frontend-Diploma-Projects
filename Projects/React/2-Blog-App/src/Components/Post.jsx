import { useParams } from "react-router-dom";
import personalImg from "../assets/Image.png";
import cardImg from "../assets/cardImage.png";
const Post = () => {
  const { postTitle } = useParams();

  const posts = [
    {
      id: 0,
      cardImg: cardImg,
      category: "Technology",
      title: "The Impact of AI on Modern Industries",
      personalImg: personalImg,
      author: "John Doe",
      date: "June 15, 2023",
    },
    {
      id: 1,
      cardImg: "https://via.placeholder.com/350x230?text=Telemedicine",
      category: "Health",
      title: "The Role of Telemedicine in Healthcare",
      personalImg: "https://via.placeholder.com/40x40?text=Jane+Smith",
      author: "Jane Smith",
      date: "July 10, 2023",
    },
    {
      id: 2,
      cardImg: "https://via.placeholder.com/350x230?text=Cryptocurrency",
      category: "Finance",
      title: "Cryptocurrency: The Future of Digital Currency?",
      personalImg: "https://via.placeholder.com/40x40?text=Alice+Johnson",
      author: "Alice Johnson",
      date: "August 5, 2023",
    },
    {
      id: 3,
      cardImg: "https://via.placeholder.com/350x230?text=E-Learning",
      category: "Education",
      title: "E-Learning Platforms: Changing the Face of Education",
      personalImg: "https://via.placeholder.com/40x40?text=Michael+Brown",
      author: "Michael Brown",
      date: "September 1, 2023",
    },
    {
      id: 4,
      cardImg: "https://via.placeholder.com/350x230?text=Renewable+Energy",
      category: "Environment",
      title: "Renewable Energy: Solutions for a Sustainable Future",
      personalImg: "https://via.placeholder.com/40x40?text=Emily+Davis",
      author: "Emily Davis",
      date: "October 12, 2023",
    },
    {
      id: 5,
      cardImg: "https://via.placeholder.com/350x230?text=Top+Destinations",
      category: "Travel",
      title: "Top 10 Destinations to Visit in 2024",
      personalImg: "https://via.placeholder.com/40x40?text=David+Wilson",
      author: "David Wilson",
      date: "November 20, 2023",
    },
    {
      id: 6,
      cardImg: "https://via.placeholder.com/350x230?text=Plant-Based+Diet",
      category: "Food",
      title: "The Rise of Plant-Based Diets",
      personalImg: "https://via.placeholder.com/40x40?text=Sophia+Martinez",
      author: "Sophia Martinez",
      date: "December 25, 2023",
    },
    {
      id: 7,
      cardImg: "https://via.placeholder.com/350x230?text=E-Sports",
      category: "Sports",
      title: "The Evolution of E-Sports: From Hobby to Professional Sport",
      personalImg: "https://via.placeholder.com/40x40?text=Chris+Lee",
      author: "Chris Lee",
      date: "January 15, 2024",
    },
    {
      id: 8,
      cardImg: "https://via.placeholder.com/350x230?text=5G+Technology",
      category: "Technology",
      title: "5G Technology: Transforming Connectivity",
      personalImg: "https://via.placeholder.com/40x40?text=Lisa+Nguyen",
      author: "Lisa Nguyen",
      date: "February 10, 2024",
    },
    {
      id: 9,
      cardImg: "https://via.placeholder.com/350x230?text=Minimalism",
      category: "Lifestyle",
      title: "Minimalism: A New Approach to Modern Living",
      personalImg: "https://via.placeholder.com/40x40?text=Paul+Walker",
      author: "Paul Walker",
      date: "March 8, 2024",
    },
    {
      id: 10,
      cardImg: "https://via.placeholder.com/350x230?text=Mental+Health",
      category: "Health",
      title: "Mental Health Awareness: Breaking the Stigma",
      personalImg: "https://via.placeholder.com/40x40?text=Rachel+Green",
      author: "Rachel Green",
      date: "April 22, 2024",
    },
    {
      id: 11,
      cardImg: "https://via.placeholder.com/350x230?text=Blockchain",
      category: "Technology",
      title: "Blockchain Beyond Bitcoin: New Applications in 2024",
      personalImg: "https://via.placeholder.com/40x40?text=Mark+Thompson",
      author: "Mark Thompson",
      date: "May 30, 2024",
    },
    {
      id: 12,
      cardImg: "https://via.placeholder.com/350x230?text=Investment",
      category: "Finance",
      title: "Investment Strategies for a Volatile Market",
      personalImg: "https://via.placeholder.com/40x40?text=Sarah+Miller",
      author: "Sarah Miller",
      date: "June 18, 2024",
    },
    {
      id: 13,
      cardImg: "https://via.placeholder.com/350x230?text=Sustainable+Tourism",
      category: "Travel",
      title: "Sustainable Tourism: Traveling Responsibly",
      personalImg: "https://via.placeholder.com/40x40?text=Tom+Anderson",
      author: "Tom Anderson",
      date: "July 4, 2024",
    },
    {
      id: 14,
      cardImg: "https://via.placeholder.com/350x230?text=Sourdough",
      category: "Food",
      title: "The Art of Sourdough: Tips and Tricks for Beginners",
      personalImg: "https://via.placeholder.com/40x40?text=Jessica+Taylor",
      author: "Jessica Taylor",
      date: "August 14, 2024",
    },
    {
      id: 15,
      cardImg: "https://via.placeholder.com/350x230?text=Meditation",
      category: "Lifestyle",
      title: "The Benefits of Daily Meditation",
      personalImg: "https://via.placeholder.com/40x40?text=Brian+King",
      author: "Brian King",
      date: "September 21, 2024",
    },
  ];

  const post = posts.find((post) => post.title === postTitle);
  return (
    <div className="container max-w-4xl p-4 mx-auto mt-10 text-gray-700">
      <p className="text-white bg-blue-600 w-24 py-[3px] font-semibold text-center rounded-md">
        {post.category}
      </p>
      <h1 className="my-3 text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {post.title}
      </h1>
      <div className="flex items-center mb-6 font-normal text-gray-400">
        <img
          src={post.personalImg}
          alt="Personal"
          className="rounded-full me-3"
        />
        <p className="me-6">{post.author}</p>
        <p>{post.date}</p>
      </div>
      <img src={post.cardImg} alt="Card" width="100%" />
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </p>
      <h2 className="text-xl font-bold text-black md:text-2xl">
        Research Your Destination
      </h2>
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </p>
      <h2 className="text-xl font-bold text-black md:text-2xl">
        Plan Your Itinerary
      </h2>
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </p>
      <p className="p-6 text-xl italic rounded-lg shadow-md bg-slate-50">
        “ Traveling can expose you to new environments and potential health
        risks, so it's crucial to take precautions to stay safe and healthy. ”
      </p>
      <img src={post.cardImg} alt="Card" width="100%" className="my-5" />
      <p className="p-6 text-xl italic rounded-lg shadow-md bg-slate-50">
        “ Traveling can expose you to new environments and potential health
        risks, so it's crucial to take precautions to stay safe and healthy. ”
      </p>
      <h2 className="text-xl font-bold text-black md:text-2xl">
        Research Your Destination
      </h2>
      <p className="my-10 text-lg leading-8 md:leading-9 md:text-xl">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
    </div>
  );
};

export default Post;
