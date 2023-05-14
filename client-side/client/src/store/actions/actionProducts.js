import { baseUrl, PRODUCTS, PRODUCTS_DETAIL } from "./actionType";

export const fetchProductsSuccess = (payload) => {
  return {
    type: PRODUCTS,
    payload,
  };
};

export const fetchDetailSuccess = (payload) => {
  // console.log(payload);
  return {
    type: PRODUCTS_DETAIL,
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
      // console.log(data);
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
      const data = await response.json();
      // console.log(data);

      dispatch(fetchDetailSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
