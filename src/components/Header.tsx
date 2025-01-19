import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1 className={styles.logo}>Hello World !</h1>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Project</a>
      </nav>
    </header>
  );
}
export default Header;
