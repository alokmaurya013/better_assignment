import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import "./App.css"; // Import the App's CSS

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => setIsLoggedIn(true);  // Login handler
  const handleLogout = () => setIsLoggedIn(false); // Logout handler

  return (
    <Router>
      <div className="app">
        {/* Navbar component */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        
        <div className="app-content">
          {/* Routes */}
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />}
            />
            
            {/* Home page route */}
            <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
            
            {/* Login page route */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            
            {/* SignUp page route */}
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
