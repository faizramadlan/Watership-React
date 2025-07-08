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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl py-10 px-8 flex flex-col gap-4 border-4 border-pink-500 relative animate-fadeIn"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow animate-bounce z-10">🔥 Add/Edit Category</span>
        {id ? (
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-500 mb-4 text-center drop-shadow-lg">Edit Category</h1>
        ) : (
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-500 mb-4 text-center drop-shadow-lg">Add Category</h1>
        )}
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 mt-4 animate-bounce"
        >
          {id ? 'Update Category' : 'Add Category'}
        </button>
      </form>
    </div>
  );
}
