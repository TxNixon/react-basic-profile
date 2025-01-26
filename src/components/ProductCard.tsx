import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: {
    name: string;
    price: number;
    image: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductCard;
