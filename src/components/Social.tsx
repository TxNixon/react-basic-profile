import Instagram from "../assets/instagram.png";
import styles from "./Social.module.css";

function Social() {
  return (
    <div className={styles.Social}>
      <a href="https://www.instagram.com/admojocahyo/" target="_blank">
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
  );
}

export default Social;
