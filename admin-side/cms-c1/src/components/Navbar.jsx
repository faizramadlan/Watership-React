import reactLogo from "../assets/react.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const navigate = useNavigate();
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
    <header className="bg-black bg-opacity-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={reactLogo} alt="React logo" className="w-10" />
          <h1 className="text-lg text-white font-bold">Watership</h1>
          <NavLink
            to="/"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/categories"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Categories
          </NavLink>
          <NavLink
            to="/register-admin"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Register Admin
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">
            Welcome, {localStorage.logged_user}
          </span>
          <button
            onClick={handleLogout}
            className="text-white hover:bg-orange-500 hover:text-blue-500 py-2 px-4 border border-white rounded"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
