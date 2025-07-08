import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/actionProducts";
import Card from "../components/Card";

export default function Products() {
  let courses = useSelector((state) => state.productsReducer.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <div className="flex justify-center gap-2 mb-4">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-bounce">🔥 XP +10</span>
          <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">NEW</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">
          All Courses
        </h1>
        <p className="text-lg text-gray-300 mb-4">Level up your skills with real-world, project-based courses.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
         <Card key={course.id} data={course}/>
        ))}
      </div>
    </div>
  );
}
