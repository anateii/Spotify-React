import { initialState } from "../store";

const songReducer = (state = initialState.currentSong, action) => {
  switch (action.type) {
    case "SET_SONG":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;