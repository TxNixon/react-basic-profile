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
        marginBottom: "10px",
        cursor: "pointer",
        position: "absolute",
        right: "10px",
        top: "10px",
        display: "flex",
        borderRadius: "10px",
        backgroundColor: isDay ? "#f39c12" : "#2c3e50",
        color: isDay ? "#fff" : "#ecf0f1",
        alignItems: "center",
        gap: "10px",
        border: "none",
      }}
    >
      <img
        src={isDay ? sun : moon}
        alt={isDay ? "Sun" : "Moon"}
        style={{ width: "20px", height: "20px" }}
      />
    </button>
  );
};

export default DaynNight;
