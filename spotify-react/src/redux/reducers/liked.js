import { initialState } from "../store";

const likedReducer = (state = initialState.likedSongs, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        elements: state.elements.filter((e) => e !== action.payload),
      };
    default:
      return state;
  }
};

export default likedReducer;