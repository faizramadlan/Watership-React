import { baseUrl, PRODUCTS } from "./actionType";
import { toast } from "react-toastify";

export const fetchProductsSuccess = (payload) => {
  return {
    type: PRODUCTS,
    payload,
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + "/courses");
      if (!response.ok) {
        console.log(response.text());
      }
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDetailProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + `/courses/${id}`);
      if (!response.ok) {
        console.log(response.text());
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });

      const res = await response.json();
      if (!response.ok) {
        throw { message: res.message };
      }
      toast.success(`${res.name} has been Added`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return res;
    } catch (error) {
      // console.log(error);
      toast.error(error.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
};

export const editProduct = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });
      const res = await response.json();
      if (!response.ok) {
        throw { message: res.message };
      }
      toast.success(`${res.name} has been Added`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return "Success edit product!";
    } catch (error) {
      toast.error(error.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/courses/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      const res = await response.json();
      if (!response.ok) {
        throw { message: "Failed to Delete" };
      }
      toast.success(`${res.msg} has been Added`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(fetchProducts());
    } catch (error) {
      toast.error(error.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
};
