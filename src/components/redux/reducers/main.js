import { getProductsReducers } from "./productsreducers.js";
import { combineReducers } from "redux";

const rootreducers = combineReducers({
      getproductsdata: getProductsReducers
});

export default rootreducers;