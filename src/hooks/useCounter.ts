import { useState } from "react";

type IncrementProps = {
  value: number;
};

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

  const handleIncrementBy = ({ value }: IncrementProps) => {
    setCount((prevCount) => prevCount + value);
  };

  return {
    count,
    handleReset,
    handleDecrement,
    handleIncrement,
    handleIncrementBy,
  };
};

export default useCounter;
