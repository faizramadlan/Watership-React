import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/actionCategories";
import { Link } from "react-router-dom";
import Table from "../components/Table";

export default function Categories() {
  let categories = useSelector((state) => state.categoriesReducer.categories);
  let dispatch = useDispatch();

  useEffect(() => {
    // console.log(courses);
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-screen min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl text-black font-bold">Category List</h1>
            <Link
              to="/add/category"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Category
            </Link>
          </div>
          <table className="w-full text-black  text-left">
            <thead>
              <tr className="text-gray-500 uppercase text-xs border-b-2 border-gray-300">
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
      </main>
    </div>
  );
}
