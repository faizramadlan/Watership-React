import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../store/actions/actionUsers";
import { fetchProducts } from "../store/actions/actionProducts";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(form)).then((result) => {
      // console.log(result);
      if (result) {
        navigate("/");
      }
    });

    setForm({
      email: "",
      password: "",
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Watership CMS
        </h1>

        <form
          onSubmit={handleLogin}
          action=""
          className="bg-white mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg text-gray-800 font-medium">
            Login to CMS
          </p>

          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                onChange={handleInputChange}
                value={form.email}
                name="email"
                type="email"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                onChange={handleInputChange}
                value={form.password}
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
