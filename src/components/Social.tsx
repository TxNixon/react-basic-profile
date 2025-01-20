import Instagram from "../assets/instagram.png";
import styles from "./Social.module.css";
import Github from "../assets/github-sign.png";
import Facebook from "../assets/facebook.png";

function Social() {
  return (
    <div className={styles.Social}>
      <span>
        <a href="https://www.instagram.com/admojocahyo/" target="_blank">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/TxNixon" target="_blank">
          <img src={Github} alt="Github" />
        </a>
        <a href="https://www.facebook.com/admojo.santoso/" target="_blank">
          <img src={Facebook} alt="Facebook" />
        </a>
      </span>
    </div>
  );
}

export default Social;
