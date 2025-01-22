import { useState, useEffect } from "react";

const useDayNight = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay((prevIsDay) => !prevIsDay);
  };

  useEffect(() => {
    // Optional: Toggle a global dark mode class on the body
    if (!isDay) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDay]);

  return { isDay, toggleDayNight };
};

export default useDayNight;
