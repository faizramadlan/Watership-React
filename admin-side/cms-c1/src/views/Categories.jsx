import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/actionCategories";
import { Link } from "react-router-dom";
import Table from "../components/Table";

export default function Categories() {
  let categories = useSelector((state) => state.categoriesReducer.categories);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center px-4 py-12 transition-colors duration-500">
      <div className="max-w-4xl w-full bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl p-8 md:p-12 mt-8 transition-colors duration-500">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col items-start">
            <div className="flex gap-2 mb-2">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-bounce">🔥 XP +10</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">NEW</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">Category List</h1>
          </div>
          <Link
            to="/add/category"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 animate-bounce"
          >
            + Add New Category
          </Link>
        </div>
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 uppercase text-xs border-b-2 border-gray-700">
                <th className="py-2">#</th>
                <th className="py-2">Name</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category,index) => (
                <Table key={category.id} data={category} id={index+1} page={'categories'}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
