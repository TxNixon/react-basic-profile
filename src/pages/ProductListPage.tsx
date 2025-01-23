import { Link, useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleValueChange = (sortValue: string) => {
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <h1>Product List Page</h1>
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
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductListPage;
