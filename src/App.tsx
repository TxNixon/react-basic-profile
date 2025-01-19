import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import profileImage from "./assets/Profile.png";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ProfileCard
          name="Admojo Cahyo Santoso"
          avatar={profileImage}
          bio="Entrepreneur & It Lover"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
