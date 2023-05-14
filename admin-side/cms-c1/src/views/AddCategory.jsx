import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCategory,
  editCategory,
  deleteCategory,
  fetchDetailCategory,
} from "../store/actions/actionCategories";

export default function FormCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailCategory(id)).then((result) => {
        console.log(result);
        setForm(result);
      });
    }
  }, [id]);

  function clear() {
    setForm({
      name: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!id) {
        await dispatch(addCategory(form));
        clear();
      } else {
        await dispatch(editCategory(form, id));
        clear();
      }
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white px-4 py-5 rounded-lg mt-7"
      >
        {id ? (
          <h1 className="text-3xl text-black font-bold mb-8">Edit Category</h1>
        ) : (
          <h1 className="text-3xl text-black font-bold mb-8">Add Category</h1>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
