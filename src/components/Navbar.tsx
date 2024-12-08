import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

interface NavbarProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <h1>My App</h1>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
