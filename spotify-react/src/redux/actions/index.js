export const setSongAction = (song) => ({
    type: "SET_SONG",
    payload: song,
  });
  
  export const addToFavouritesAction = (id) => ({
    type: "ADD_TO_FAVOURITES",
    payload: id,
  });
  
  export const removeFromFavouritesAction = (id) => ({
    type: "REMOVE_FROM_FAVOURITES",
    payload: id,
  });