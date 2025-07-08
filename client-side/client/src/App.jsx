import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./router/index";
import store from './store'
import EnrolledCourses from './views/EnrolledCourses';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customRouter = createBrowserRouter([
  ...router.routes,
  {
    path: '/enrolled',
    element: <EnrolledCourses />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={customRouter} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
