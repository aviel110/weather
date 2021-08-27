import * as remx from 'remx';

const initialState = {
  loading: true,
  favorites: ['Yemen'],
};

const state = remx.state(initialState);

//#####################################
// getters
// The warpped getters functions shoud be defined inside the same store file and should be exported.
//#####################################

export const getters = remx.getters({
  isLoading() {
    return state.loading;
  },

  getFavorites() {
    return state.favorites;
  },
});

//#####################################
// setters
// The warpped setters functions shoud be defined inside the store and should be exported.
//#####################################
export const setters = remx.setters({
  setFavorites(favorites) {
    state.favorites = favorites;
    state.loading = false;
  },
});
