import { useParams } from "react-router";
const ProductDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Ini Product Detail Page</h1>
      <h2>{params.produkName}</h2>
    </div>
  );
};

export default ProductDetailPage;
