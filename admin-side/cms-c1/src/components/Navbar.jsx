import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    toast.success("Logged Out", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  }
  return (
    <nav className="w-full bg-gray-950 dark:bg-black shadow-lg py-3 px-4 flex items-center justify-between sticky top-0 z-50 transition-colors duration-500">
      {/* Logo and nav */}
      <div className="flex items-center gap-4">
        <span className="text-pink-500 text-2xl font-extrabold tracking-tight hover:scale-105 transition-transform">🔥</span>
        <h1 className="text-lg text-white font-extrabold tracking-tight mr-4">Fireship Admin</h1>
        <NavLink to="/" className={({isActive}) => `text-white font-bold px-3 py-1 rounded-full hover:bg-pink-500 hover:text-white transition ${isActive ? 'bg-pink-500' : ''}`}>Dashboard</NavLink>
        <NavLink to="/categories" className={({isActive}) => `text-white font-bold px-3 py-1 rounded-full hover:bg-pink-500 hover:text-white transition ${isActive ? 'bg-pink-500' : ''}`}>Categories</NavLink>
        <NavLink to="/register-admin" className={({isActive}) => `text-white font-bold px-3 py-1 rounded-full hover:bg-pink-500 hover:text-white transition ${isActive ? 'bg-pink-500' : ''}`}>Register Admin</NavLink>
      </div>
      {/* Right side: welcome, dark mode, logout */}
      <div className="flex items-center gap-2">
        <span className="text-white font-semibold mr-2 hidden md:inline">Welcome, {localStorage.logged_user}</span>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-yellow-400 hover:text-pink-500 text-xl p-2 rounded-full transition-colors duration-200"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={handleLogout}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-full shadow transition-all duration-200 ml-2"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
