import { ADD_TODO, DELETE_TODO } from "../action/todoAction";

const initialState = {
  data: ["belajar redux", "redux itu gampang"],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // console.log(action.payload)

      return {
        data: [...state.data, action.payload],
      };
    case DELETE_TODO:
        return{...state.data.filter((todo, index) => i!==action.payload)}
    default:
      return state;
  }
}

export default todoReducer;
