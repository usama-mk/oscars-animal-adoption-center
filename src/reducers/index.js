import { combineReducers } from "redux";
import animalsReducer from "./animals";
import userReducer from "./user";

const allReducers= combineReducers({
    user: userReducer,
    animals: animalsReducer
});

export default allReducers;