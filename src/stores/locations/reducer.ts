import { Reducer } from 'redux';
import { LocationType } from '../../assets/types';
import { locationTypeMock_Jerusalem, locationTypeMock_TelAviv } from '../../service/mocks';
import { LocationsActions } from './actions';

export type LocationsState = {
  currentLocation: LocationType;
  favorites: LocationType[];
};

const initialState: LocationsState = {
  currentLocation: locationTypeMock_Jerusalem,
  favorites: [locationTypeMock_Jerusalem, locationTypeMock_TelAviv],
};

const reducer: Reducer<LocationsState> = (state = initialState, action) => {
  switch (action.type) {
    case LocationsActions.ON_CURRENT_LOCATION_UPDATED:
      return { ...state, currentLocation: action.payload };
    case LocationsActions.ON_FAVORITES_UPDATED:
      return { ...state, favorites: action.payload };
    case LocationsActions.ON_DELETE_FAVORITE:
      const updatedFavorites = state.favorites.filter(item => item.Key !== action.payload);
      return { ...state, favorites: updatedFavorites };
    case LocationsActions.ON_ADD_FAVORITE:
      if (!!state.favorites.find(loc => loc.Key === action.payload.key)) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export { reducer as locationsReducer };
