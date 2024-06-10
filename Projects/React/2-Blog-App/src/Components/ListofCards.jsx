import personalImg from "../assets/Image.png";
import cardImg from "../assets/cardImage.png";
import Card from "./Card";
import { useSearchContext } from "./context/SearchContext";
const ListofCards = () => {
  const { searchValue } = useSearchContext();

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

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="container grid max-w-6xl grid-cols-1 gap-5 p-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Card key={post.id} {...post} />)
        ) : (
          <p className="col-span-1 my-10 text-2xl font-bold text-center md:col-span-2 lg:col-span-3">
            Not found posts
          </p>
        )}
      </div>
      {filteredPosts.length > 0 && (
        <button className="flex px-6 py-3 mx-auto mb-5 border-2">
          Load More
        </button>
      )}
    </>
  );
};

export default ListofCards;
