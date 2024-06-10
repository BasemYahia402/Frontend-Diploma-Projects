import { useState } from "react";
import personImg from "../assets/icon_personal.jpg";
import RatingStar from "./RatingStar";

const Review = ({ star, text, userName }) => {
  const [rating, setRating] = useState(star);
  return (
    <div className="mb-4 ">
      <div className="flex items-center gap-3">
        <img src={personImg} alt="personImg" className="w-8" />
        <p className="text-gray-500">{userName}</p>
      </div>
      <RatingStar rating={rating} setRating={setRating} readOnly={false} />
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
};

export default Review;
