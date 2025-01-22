import useDayNight from "../hooks/useDaynNight";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const DaynNight = ({ onToggle }: { onToggle: () => void }) => {
  const { isDay, toggleDayNight } = useDayNight();

  const handleClick = () => {
    toggleDayNight();
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: isDay ? "#f39c12" : "#2c3e50",
        color: isDay ? "#fff" : "#ecf0f1",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src={isDay ? sun : moon}
        alt={isDay ? "Sun" : "Moon"}
        style={{ width: "20px", height: "20px", textAlign: "right" }}
      />
    </button>
  );
};

export default DaynNight;
