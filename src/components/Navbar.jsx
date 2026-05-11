import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../images/logo.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-800">
      
      
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Estetik logo"
          className="h-16 w-auto object-contain hover:scale-105 transition"
        />
      </Link>

     
      <div className="flex gap-6 items-center text-sm font-medium">

        <Link to="/" className="hover:text-yellow-500 transition">
          Početna
        </Link>

        <Link to="/services" className="hover:text-yellow-500 transition">
          Usluge
        </Link>

        <Link to="/contact" className="hover:text-yellow-500 transition">
          Kontakt
        </Link>

        
        {user ? (
          <>
            <span className="text-gray-500 dark:text-gray-300">
              {user.email}
            </span>

            <button
              onClick={handleLogout}
              className="hover:text-yellow-500 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:text-yellow-500 transition">
            Login
          </Link>
        )}

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;