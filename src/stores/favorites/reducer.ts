import { Reducer } from 'redux';

export type FavoritesState = {
  favorites: any[];
};

const initialState: FavoritesState = {
  favorites: ['yemen'],
};

const ON_FAVORITES_UPDATED = 'onFavoritesUpdated';

const reducer: Reducer<FavoritesState> = (state = initialState, action) => {
  switch (action.type) {
    case ON_FAVORITES_UPDATED:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export { reducer as favoritesReducer };
