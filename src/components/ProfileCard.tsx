import { useState } from "react";
import styles from "./ProfileCard.module.css";
import Social from "./Social";
import Counter from "./Counter";
import DaynNight from "./DaynNight";

type ProfileCardProps = {
  name: string;
  avatar: string;
  bio: string;
};

function ProfileCard({ name, avatar, bio }: ProfileCardProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`${styles.ProfileCard} ${isDarkMode ? styles.darkMode : ""}`}
    >
      <DaynNight onToggle={toggleTheme} />
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <Counter />
      <Social />
    </div>
  );
}

export default ProfileCard;
