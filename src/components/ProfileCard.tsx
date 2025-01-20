import styles from "./ProfileCard.module.css";
import Social from "./Social";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

type ProfileCardProps = {
  name: string;
  avatar: string;
  bio: string;
};

function ProfileCard({ name, avatar, bio }: ProfileCardProps) {
  return (
    <div className={styles.ProfileCard}>
      <img src={moon} alt="moon" className={styles.acc} />
      <img src={sun} alt="sun" className={styles.acc} />
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <Social />
    </div>
  );
}

export default ProfileCard;
