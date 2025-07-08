import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setCourses(data);
    }
    fetchCourses();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full text-center mb-12">
        <div className="flex flex-wrap justify-center mb-4 gap-2">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-bounce">🔥 XP +10</span>
          <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">NEW</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">MEME PRIZE 🏆</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
          Learn to Code <span className="text-pink-500">Faster</span>.
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 font-medium">
          Project-based learning, dopamine hits, and meme prizes. Level up your skills with real-world projects.
        </p>
        <Link
          to="/courses"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg shadow-lg transition-all duration-200 animate-bounce"
        >
          🚀 Start Learning
        </Link>
      </div>
      {/* Optionally, show a preview of some courses/cards here */}
    </div>
  );
}
