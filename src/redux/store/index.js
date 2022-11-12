import { createStore } from "redux";
import todoReducer from "../reducer/todoReducer";

// const allReducer = combineReducers({
//     counter : counterReducer,
//     todo : todoReducer
// })
const store = createStore(todoReducer);

export default store;
