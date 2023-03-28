import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
    user: userReducer,
    product: productReducer
});

export default allReducers;