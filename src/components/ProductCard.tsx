import { useNavigate } from "react-router";
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
    console.log(product.name);
  };

  return (
    <div onClick={handleCardClick} className={styles.productCard}>
      <img src={product.image} alt={product.name} />
      <p>Rp.{product.price}</p>
      <h2>Name : {product.name}</h2>
    </div>
  );
};

export default ProductCard;
