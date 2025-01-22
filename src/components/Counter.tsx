import { useState } from "react";
import useCounter from "../hooks/useCounter";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

const Counter = () => {
  const { count, handleIncrementBy, handleDecrement } = useCounter();
  const [isLiked, setIsLiked] = useState(false); // Tracks if the button is currently "Liked"

  const toggleLike = () => {
    if (isLiked) {
      // If already liked, decrement the count and toggle to "Not Liked"
      handleDecrement();
      setIsLiked(false);
    } else {
      // If not liked, increment the count and toggle to "Liked"
      handleIncrementBy({ value: 1 });
      setIsLiked(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{count}</p>
      <button
        onClick={toggleLike}
        style={{ background: "none", border: "none" }}
      >
        {isLiked ? (
          <img
            src={dislike}
            alt="Dislike"
            style={{ width: "30px", height: "30px" }}
          />
        ) : (
          <img
            src={like}
            alt="Like"
            style={{ width: "30px", height: "30px" }}
          />
        )}
      </button>
    </div>
  );
};

export default Counter;
