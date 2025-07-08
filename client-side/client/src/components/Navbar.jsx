import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function getLevel(xp) {
  return Math.floor(xp / 200) + 1;
}
function getLevelProgress(xp) {
  return xp % 200;
}

export default function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [xp, setXp] = useState(() => {
    return parseInt(localStorage.getItem("xp") || "0", 10);
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

  useEffect(() => {
    // Listen for XP changes in localStorage
    const interval = setInterval(() => {
      setXp(parseInt(localStorage.getItem("xp") || "0", 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }
  const level = getLevel(xp);
  const progress = getLevelProgress(xp);
  return (
    <nav className="w-full bg-gray-950 dark:bg-black shadow-lg py-3 px-4 flex items-center justify-between sticky top-0 z-50 transition-colors duration-500">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-pink-500 font-extrabold text-2xl tracking-tight hover:scale-105 transition-transform">
        <span role="img" aria-label="fire">🔥</span> Fireship Clone
      </Link>
      {/* XP and Enrolled link */}
      <div className="flex-1 flex flex-col items-center gap-1">
        <div className="flex gap-4 items-center mb-1">
          <Link to="/enrolled" className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full shadow hover:bg-yellow-500 transition-all duration-200 text-sm flex items-center gap-2">
            <span role="img" aria-label="medal">🏅</span> Enrolled
          </Link>
          <span className="bg-pink-500 text-white font-bold px-4 py-1 rounded-full shadow text-sm flex items-center gap-2 animate-bounce">
            <span role="img" aria-label="xp">⚡</span> XP: {xp}
          </span>
          <span className="bg-blue-600 text-white font-bold px-4 py-1 rounded-full shadow text-sm flex items-center gap-2">Level {level}</span>
        </div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-2 bg-pink-500 rounded-full transition-all duration-500"
            style={{ width: `${(progress / 200) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Right side: dark mode, login/profile */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-yellow-400 hover:text-pink-500 text-xl p-2 rounded-full transition-colors duration-200"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <Link
          to="/login"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-full shadow transition-all duration-200 ml-2"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
