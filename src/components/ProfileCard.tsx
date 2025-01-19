import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  name: string;
  avatar: string;
  bio: string;
};

function ProfileCard({ name, avatar, bio }: ProfileCardProps) {
  return (
    <div className={styles.ProfileCard}>
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
