import { Link } from "react-router";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/product-list">Product List</Link>
      <Link to="/product-detail">Product Detail</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
