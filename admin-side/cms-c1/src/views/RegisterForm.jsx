import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/actions/actionUsers";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(register(form)).then((result) => {
      console.log(result);
      if (result) {
        navigate("/");
      }
    });;
    setForm({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    });
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-lg py-10 px-8"
      >
          <h1 className="text-3xl text-black font-bold mb-8">Register new Admin</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.price}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mainImg"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="passeord"
            value={form.password}
            onChange={handleOnChange}
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
