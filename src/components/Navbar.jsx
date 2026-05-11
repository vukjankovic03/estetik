import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../images/logo.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      
      <nav className="border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 relative z-50">

        <div className="flex justify-between items-center px-6 py-4">

         
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Estetik logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

         
          <div className="hidden md:flex gap-6 items-center text-sm font-medium">

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

        
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>
      </nav>

     
      {open && (
        <div className="fixed inset-0 bg-black/80 z-[999] flex flex-col items-center justify-center gap-8 text-white text-xl">

    
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ✕
          </button>

          <Link to="/" onClick={() => setOpen(false)}>
            Početna
          </Link>

          <Link to="/services" onClick={() => setOpen(false)}>
            Usluge
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Kontakt
          </Link>

          {user ? (
            <button onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}

          <ThemeToggle />

        </div>
      )}
    </>
  );
}

export default Navbar;