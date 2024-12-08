import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";  

const Home: React.FC = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("rememberedEmail");
    navigate("/login"); 
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
