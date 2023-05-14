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
      <tr className="border-b-2 border-gray-300">
        <td className="py-4">{id}</td>
        <td className="px-1">
          <img
            className="h-16 w-32 object-cover rounded-md"
            src={data.mainImg}
            alt={data.name}
          />
        </td>
        <td className="py-4 text-black">{data.name}</td>
        <td className="py-4 text-black">
          <span className="text-black font-bold">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.price)}
          </span>
        </td>
        <td className="py-4 text-black">{data.Category.name}</td>
        <td className="py-4 text-black">{data.User.username}</td>
        <td className="py-4">
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mr-2"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>

            <Link
              to={`/add/products/${data.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="border-b-2 border-gray-300">
        <td className="py-4">{id}</td>
        <td className="py-4">{data.name}</td>
        <td className="py-4">
          <div className="flex items-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mr-2"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>

            <Link to={`/add/category/${data.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    );
  }
}
