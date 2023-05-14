import { baseUrl, CATEGORIES } from "./actionType";
import { toast } from "react-toastify";

export const fetchCategoriesSuccess = (payload) => {
  return {
    type: CATEGORIES,
    payload,
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + "/categories");
      if (!response.ok) {
        console.log(response.text());
      }
      const data = await response.json();
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDetailCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + `/categories/${id}`);
      console.log(response);
      if (!response.ok) {
        return console.log(response.text());
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCategory = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
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
      return "Success add category!";
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

export const editCategory = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
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
      return "Success edit category!";
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

export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
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
      dispatch(fetchCategories());
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
