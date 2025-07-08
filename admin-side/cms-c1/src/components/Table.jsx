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
        <td className="py-4 text-center text-gray-700 dark:text-gray-200 font-semibold">{id}</td>
        <td className="px-1">
          <img
            className="h-16 w-32 object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            src={data.mainImg}
            alt={data.name}
          />
        </td>
        <td className="py-4 text-gray-900 dark:text-blue-200 font-bold">{data.name}</td>
        <td className="py-4 text-green-700 dark:text-green-400 font-semibold">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.price)}
        </td>
        <td className="py-4 text-blue-700 dark:text-blue-300 font-medium">{data.Category.name}</td>
        <td className="py-4 text-gray-600 dark:text-gray-400">{data.User.username}</td>
        <td className="py-4">
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-error btn-sm rounded shadow hover:scale-105 transition-transform duration-200"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
            <Link
              to={`/add/products/${data.id}`}
              className="btn btn-primary btn-sm rounded shadow hover:scale-105 transition-transform duration-200"
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
        <td className="py-4 text-center text-gray-700 dark:text-gray-200 font-semibold">{id}</td>
        <td className="py-4 text-gray-900 dark:text-blue-200 font-bold">{data.name}</td>
        <td className="py-4">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-error btn-sm rounded shadow hover:scale-105 transition-transform duration-200"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
            <Link to={`/add/category/${data.id}`}
              className="btn btn-primary btn-sm rounded shadow hover:scale-105 transition-transform duration-200"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    );
  }
}
