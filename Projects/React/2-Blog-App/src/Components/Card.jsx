/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = (props) => {
  const { cardImg, category, title, personalImg, author, date } = props;
  return (
    <Link to={`posts/${title}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img className="p-4 rounded-t-lg" src={cardImg} alt="cardImage" />
        <div className="p-5">
          <p className="w-24 py-[3px] font-semibold text-center text-blue-500 bg-gray-100 rounded-md">
            {category}
          </p>
          <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <div className="flex items-center justify-between font-normal text-gray-400">
            <img src={personalImg} alt="personalImage" className="rounded-full"/>
            <p>{author}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
