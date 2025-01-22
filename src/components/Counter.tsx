import { useState } from "react";
import useCounter from "../hooks/useCounter";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

const Counter = () => {
  const { count, handleIncrementBy, handleDecrement } = useCounter();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    if (isLiked) {
      handleDecrement();
      setIsLiked(false);
    } else {
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
      <p style={{ fontSize: "20px", marginTop: "20px" }}>{count}</p>
      <button
        onClick={toggleLike}
        style={{ background: "none", border: "none" }}
      >
        {isLiked ? (
          <img
            src={dislike}
            alt="Dislike"
            style={{ width: "20px", height: "20px" }}
          />
        ) : (
          <img
            src={like}
            alt="Like"
            style={{ width: "20px", height: "20px" }}
          />
        )}
      </button>
    </div>
  );
};

export default Counter;
