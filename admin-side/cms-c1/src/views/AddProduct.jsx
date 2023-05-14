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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-lg py-10 px-8"
      >
        {id ? (
          <h1 className="text-3xl text-black font-bold mb-8">Edit Course</h1>
        ) : (
          <h1 className="text-3xl text-black font-bold mb-8">Add Course</h1>
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
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={form.price}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mainImg"
            className="block text-gray-700 font-bold mb-2"
          >
            Main Image URL
          </label>
          <input
            type="text"
            name="mainImg"
            id="mainImg"
            value={form.mainImg}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <select
            name="categoryId"
            id="categoryId"
            value={form.categoryId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option hidden selected>
              --Select One--
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {!id && (
          <div className="mb-4">
            <label
              htmlFor="mainImg"
              className="block text-gray-700 font-bold mb-2"
            >
              Images
            </label>
            <input
              type="text"
              name="image1"
              id="mainImg"
              value={images.imgUrl}
              onChange={handleImageInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              name="image2"
              id="mainImg"
              value={images.imgUrl}
              onChange={handleImageInputChange}
              className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              name="image3"
              id="mainImg"
              value={images.imgUrl}
              onChange={handleImageInputChange}
              className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}
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
