import { PRODUCTS, PRODUCTS_DETAIL } from "../actions/actionType";

const initialState = {
  products: [],
  detail: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_DETAIL:
      // console.log(action.payload);
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}
