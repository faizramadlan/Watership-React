import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import Products from "../views/Products";
import Details from "../views/Detail";

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/courses",
        element: <Products />,
      },
      {
        path: "/courses/:id",
        element: <Details />,
      }
    ],
  },
]);

export default router;
