import { useNavigate } from "react-router"; // Correct import from react-router-dom
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: {
    name: string;
    price: number;
    image: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/produk/${product.name}`);
  };

  return (
    <div onClick={handleCardClick} className={styles.productCard}>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductCard;
