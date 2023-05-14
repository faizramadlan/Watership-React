import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/actionProducts";
import { Link } from "react-router-dom";
import Table from "../components/Table";

export default function Dashboard() {
  let courses = useSelector((state) => state.productsReducer.products);
  let dispatch = useDispatch();

  useEffect(() => {
    // console.log(courses);
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-screen min-h-screen min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl text-black  font-bold">Course List</h1>
            <Link
              to="/add/products"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Course
            </Link>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 uppercase text-xs border-b-2 border-gray-300">
                <th className="py-2">#</th>
                <th className="py-2">Image</th>
                <th className="py-2">Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Author</th>
                <th className="py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course,index) => (
                <Table key={course.id} data={course} id={index+1} page={'dashboard'}/>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
