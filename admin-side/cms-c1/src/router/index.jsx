import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "../views/Homepage";
import AddPage from "../views/AddProduct";
import Layout from "../components/Layout";
import LoginForm from "../views/LoginPage";
import Categories from "../views/Categories";
import FormCategory from "../views/AddCategory";
import RegisterForm from "../views/RegisterForm";

const router = createBrowserRouter([
  {
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
    path: "/login",
    element: <LoginForm />,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }

      return null;
    },
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/register-admin",
        element: <RegisterForm />,
      },
      {
        path: "/add/products",
        element: <AddPage />,
      },
      {
        path: "/add/products/:id",
        element: <AddPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/add/category",
        element: <FormCategory />,
      },
      {
        path: "/add/category/:id",
        element: <FormCategory />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default router;
