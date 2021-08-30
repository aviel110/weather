import { Reducer } from 'redux';
import { LocationType, locationTypeMock_Jerusalem, locationTypeMock_TelAviv } from '../../assets/types';

export type FavoritesState = {
  favorites: LocationType[];
};

const initialState: FavoritesState = {
  favorites: [locationTypeMock_Jerusalem, locationTypeMock_TelAviv],
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
