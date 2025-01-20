// import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import profileImage from "./assets/Profile.png";

function App() {
  return (
    <>
      <div className="app-container">
        <main>
          <ProfileCard
            name="Admojo Cahyo Santoso Tan"
            avatar={profileImage}
            bio="I love exploring new technologies and finding creative ways to make life easier. Always looking for innovative ideas to grow and connect."
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
