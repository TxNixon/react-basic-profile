import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produk/:produkName" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
