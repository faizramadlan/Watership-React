import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  addProduct,
  fetchDetailProduct,
} from "../store/actions/actionProducts";
import { fetchCategories } from "../store/actions/actionCategories";

export default function FormProducts() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    categoryId: "",
    authorId: "",
  });
  const [images, setImages] = useState([
    { imgUrl: "" },
    { imgUrl: "" },
    { imgUrl: "" },
    { imgUrl: "" },
  ]);

  useEffect(() => {
    dispatch(fetchCategories());
    if (id) {
      dispatch(fetchDetailProduct(id)).then((result) => {
        setForm(result);
        // console.log(result);
      });
    }
  }, []);

  function clear() {
    setForm({
      name: "",
      description: "",
      price: "",
      mainImg: "",
      categoryId: "",
    });
    setImages([{ imgUrl: "" }, { imgUrl: "" }, { imgUrl: "" }, { imgUrl: "" }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!id) {
      dispatch(addProduct({ ...form, images })).then((res) => {
        if (res) {
          navigate("/");
          clear();
        }
      });
    } else {
      dispatch(editProduct(form, id)).then((res) => {
        if (res) {
          navigate("/");
          clear();
        }
      });
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleImageInputChange = (event) => {
    const { name, value } = event.target;
    let input = [...images];
    images.forEach((ele, index) => {
      if (name === `image${index + 1}`) {
        input[index] = { imgUrl: value };
      }
    });
    setImages(input);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl py-10 px-8 flex flex-col gap-4 border-4 border-pink-500 relative animate-fadeIn"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow animate-bounce z-10">🔥 Add/Edit Course</span>
        {id ? (
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-500 mb-4 text-center drop-shadow-lg">Edit Course</h1>
        ) : (
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-500 mb-4 text-center drop-shadow-lg">Add Course</h1>
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
        <div>
          <label htmlFor="description" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Description</label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleInputChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={form.price}
            onChange={handleInputChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="mainImg" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Main Image URL</label>
          <input
            type="text"
            name="mainImg"
            id="mainImg"
            value={form.mainImg}
            onChange={handleInputChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="categoryId" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Category</label>
          <select
            name="categoryId"
            id="categoryId"
            value={form.categoryId}
            onChange={handleInputChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            <option hidden value="">--Select One--</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {!id && (
          <div>
            <label htmlFor="mainImg" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Images</label>
            {[0,1,2,3].map((idx) => (
              <input
                key={idx}
                type="text"
                name={`image${idx+1}`}
                id={`image${idx+1}`}
                value={images[idx]?.imgUrl || ""}
                onChange={handleImageInputChange}
                className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition mb-2"
                placeholder={`Image URL #${idx+1}`}
              />
            ))}
          </div>
        )}
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 mt-4 animate-bounce"
        >
          {id ? 'Update Course' : 'Add Course'}
        </button>
      </form>
    </div>
  );
}
