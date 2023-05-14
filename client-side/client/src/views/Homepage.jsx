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
    <div className="bg-gray-900 min-w-screen min-h-screen container mx-auto px-4 py-8">
      <div className="pt-16">
        <h1 className="text-white font-bold text-5xl mb-8 ">
          Build and Deploy Real-World Applications
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mb-8">
          Learn modern web development with these practical, project-based
          courses.
        </p>
        <Link
          to="/courses"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded inline-flex items-center"
        >
          <span>Learn More</span>
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
