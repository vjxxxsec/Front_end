import { combineReducers } from "redux";
import { productReducer, selectedproductreducer } from "./productReducer";
 const reducers = combineReducers({
    allproducts: productReducer,
    product:selectedproductreducer,
});

export default reducers;