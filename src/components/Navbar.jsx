

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
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className="border-b border-gray-300 dark:border-gray-800">

      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Estetik logo"
            className="h-16 w-auto object-contain hover:scale-105 transition"
          />
        </Link>

        {/* DESKTOP MENU */}
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

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-center text-sm font-medium bg-white dark:bg-gray-900">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            Početna
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            Usluge
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            Kontakt
          </Link>

          {user ? (
            <>
              <span className="text-gray-500 dark:text-gray-300 break-all">
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
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Login
            </Link>
          )}

          <div className="flex justify-center">
            <ThemeToggle />
          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;