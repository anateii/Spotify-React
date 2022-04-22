import { createStore, combineReducers } from "redux";
import songReducer from "../reducers/song";
import likedReducer from "../reducers/liked";

export const initialState = {
  currentSong: {
    data: {},
  },
  likedSongs: {
    elements: [],
  },
};

const bigReducer = combineReducers({
  currentSong: songReducer,
  likedSongs: likedReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

