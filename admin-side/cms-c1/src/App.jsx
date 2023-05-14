import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer 
        
      />
    </Provider>
  );
}

export default App;
