import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, handleReset, handleDecrement, handleIncrement };
};

export default useCounter;
