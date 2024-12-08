import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";  // Import custom styles for the home page

const Home: React.FC = () => {
  const navigate = useNavigate(); // For navigation, e.g., to logout or other routes

  const handleLogout = () => {
    // Clear any saved data (e.g., from localStorage or sessionStorage)
    localStorage.removeItem("rememberedEmail");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to the Home Page</h1>
        </header>
        <main className="home-content">
          <p>
            This is the home page where you can view your dashboard, manage your
            profile, or log out.
          </p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </main>
      </div>
    </div>
  );
};

export default Home;
