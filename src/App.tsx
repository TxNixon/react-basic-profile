import ProfileCard from "./components/ProfileCard";
import profileImage from "./assets/Profile.png";
import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProfileCard
              name="Admojo Cahyo Santoso Tan"
              avatar={profileImage}
              bio="I love exploring new tech and stuff"
            />
          }
        />
        <Route path="/produk/:produkName" element={<ProductDetailPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
