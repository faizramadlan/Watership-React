import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function getLevel(xp) {
  return Math.floor(xp / 200) + 1;
}
function getLevelProgress(xp) {
  return xp % 200;
}

export default function EnrolledCourses() {
  const [enrolled, setEnrolled] = useState([]);
  const [xp, setXp] = useState(0);
  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    setEnrolled(JSON.parse(localStorage.getItem('enrolledCourses') || '[]'));
    setXp(parseInt(localStorage.getItem('xp') || '0', 10));
  }, []);

  const level = getLevel(xp);
  const progress = getLevelProgress(xp);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center px-4 py-12">
      <div className="max-w-6xl w-full bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl p-8 md:p-12 mt-8 transition-colors duration-500">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col items-start">
            <div className="flex gap-2 mb-2">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-bounce">🔥 XP: {xp}</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">ENROLLED</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">Level {level}</span>
            </div>
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner mb-2">
              <div
                className="h-2 bg-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(progress / 200) * 100}%` }}
              ></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">My Enrolled Courses</h1>
          </div>
          <Link
            to="/courses"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 animate-bounce"
          >
            Browse More Courses
          </Link>
        </div>
        {enrolled.length === 0 ? (
          <div className="text-center text-gray-300 text-xl py-16">
            <span className="block mb-4">You haven't enrolled in any courses yet.</span>
            <Link to="/courses" className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition-all duration-200">Find Courses</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {enrolled.map((enrolledCourse) => {
              const course = products.find((c) => c.id === enrolledCourse.id);
              return course ? (
                <Card key={course.id} data={course} />
              ) : (
                <div key={enrolledCourse.id} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start relative min-h-[300px]">
                  <span className="absolute top-3 left-3 bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse z-10">Enrolled ✅</span>
                  <h2 className="text-2xl font-bold text-white mb-2">{enrolledCourse.name}</h2>
                  <p className="text-gray-400 text-sm mb-2">Enrolled at: {new Date(enrolledCourse.enrolledAt).toLocaleString()}</p>
                  <Link to={`/courses/${enrolledCourse.id}`} className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-full shadow transition-all duration-200 mt-2">Go to Course</Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
} 