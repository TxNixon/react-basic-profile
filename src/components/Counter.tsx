import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
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
      <button onClick={handleDecrement}>Min</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Add</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
