import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProduct
} from "../store/actions/actionProducts";

export default function Table({ data, id, page }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteProduct(data.id));
  }

  if (page === "dashboard") {
    return (
      <tr className="border-b border-gray-200 dark:border-gray-700 transition-colors duration-500 hover:bg-blue-50 dark:hover:bg-gray-800">
        <td className="py-4 px-2 text-center text-gray-700 dark:text-gray-200 font-semibold text-sm">{id}</td>
        <td className="px-2">
          <img
            className="h-12 w-20 sm:h-16 sm:w-32 object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            src={data.mainImg}
            alt={data.name}
          />
        </td>
        <td className="py-4 px-2 text-gray-900 dark:text-blue-200 font-bold text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">{data.name}</td>
        <td className="py-4 px-2 text-green-700 dark:text-green-400 font-semibold text-sm">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.price)}
        </td>
        <td className="py-4 px-2 text-blue-700 dark:text-blue-300 font-medium text-sm hidden sm:table-cell">{data.Category.name}</td>
        <td className="py-4 px-2 text-gray-600 dark:text-gray-400 text-sm hidden md:table-cell">{data.User.username}</td>
        <td className="py-4 px-2">
          <div className="flex flex-col sm:flex-row justify-end gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg text-xs shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
            <Link
              to={`/add/products/${data.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xs shadow-lg hover:scale-105 transition-all duration-200 text-center"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="border-b border-gray-200 dark:border-gray-700 transition-colors duration-500 hover:bg-blue-50 dark:hover:bg-gray-800">
        <td className="py-4 px-2 text-center text-gray-700 dark:text-gray-200 font-semibold text-sm">{id}</td>
        <td className="py-4 px-2 text-gray-900 dark:text-blue-200 font-bold text-sm sm:text-base">{data.name}</td>
        <td className="py-4 px-2">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg text-xs shadow-lg hover:scale-105 transition-all duration-200 w-full sm:w-auto"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
            <Link to={`/add/category/${data.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xs shadow-lg hover:scale-105 transition-all duration-200 text-center w-full sm:w-auto"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    );
  }
}
