import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";
import productImages from "../assets/instagram.png";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleValueChange = (sortValue: string) => {
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };

  // Dummy product data
  const products = [
    {
      name: "Product 1",
      price: 100,
      image: productImages,
    },
    {
      name: "Product 2",
      price: 200,
      image: productImages,
    },
    {
      name: "Product 3",
      price: 300,
      image: productImages,
    },
  ];

  return (
    <div>
      <ul>
        <li>Sort: {searchParams.get("sort") || "Not set"}</li>
        <li>Name: {searchParams.get("name") || "Not set"}</li>
      </ul>

      <ul>
        <li>
          <button onClick={() => handleValueChange("price-asc")}>
            Sort price asc
          </button>
          <br />
          <button onClick={() => handleValueChange("price-dsc")}>
            Sort price dsc
          </button>
        </li>
      </ul>
      <ProductCard product={products[0]} />
    </div>
  );
};

export default ProductListPage;
