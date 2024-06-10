function RatingStar({ rating, setRating, readOnly }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className={`${!readOnly && "cursor-pointer"} start text-2xl text-${
              rating >= star ? "yellow-500" : "gray-200"
            }`}
            onClick={
              readOnly
                ? null
                : () => {
                    setRating(star);
                  }
            }
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
