import { combineReducers } from "redux";
import  productsReducer  from "./productsReducer";
import  categoriesReducer  from "./categoriesReducer";

const indexReducer = combineReducers({ productsReducer, categoriesReducer });

export default indexReducer;
