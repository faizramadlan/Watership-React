import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const indexReducer = combineReducers({ productsReducer });

export default indexReducer;
