import { Link, useParams } from "react-router";
const ProductDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Ini Product Detail Page</h1>
      <h3>{params.produkName}</h3>

      <Link to="/">Kembali ke Home</Link>
    </div>
  );
};

export default ProductDetailPage;
