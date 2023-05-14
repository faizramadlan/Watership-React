import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/actionProducts";
import Card from "../components/Card";

export default function Products() {
  let courses = useSelector((state) => state.productsReducer.products);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(courses);
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="grid min-w-[960px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
        {courses.map((course) => (
         <Card key={course.id} data={course}/>
        ))}
      </div>
    </div>
  );
}
