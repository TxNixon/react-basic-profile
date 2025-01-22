import useCounter from "../hooks/useCounter";
const Counter = () => {
  const { count, handleReset, handleDecrement, handleIncrement } = useCounter();

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
