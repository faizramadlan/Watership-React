import reactLogo from "../assets/react.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center">
        <Link to={'/'} className="text-white font-bold text-2xl" href="#">
          Watership
        </Link>
        <Link to={'/courses'} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>Courses</span>
        </Link>
      </nav>
    </div>
  );
}
