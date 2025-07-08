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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl py-10 px-8 flex flex-col gap-4 border-4 border-pink-500 relative animate-fadeIn"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow animate-bounce z-10">🔥 Register Admin</span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-500 mb-4 text-center drop-shadow-lg">Register new Admin</h1>
        <div>
          <label htmlFor="username" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleOnChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleOnChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleOnChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={form.phoneNumber}
            onChange={handleOnChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 dark:text-gray-200 font-bold mb-1">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleOnChange}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 mt-4 animate-bounce"
        >
          Register
        </button>
      </form>
    </div>
  );
}
