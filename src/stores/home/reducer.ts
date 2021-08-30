import { Reducer } from 'redux';
import { LocationType, locationTypeMock_Jerusalem } from '../../assets/types';
import { HomeActions } from './actions';

export type HomeState = {
  currentLocation: LocationType;
};

const initialState: HomeState = {
  currentLocation: locationTypeMock_Jerusalem,
};

const reducer: Reducer<HomeState> = (state = initialState, action) => {
  switch (action.type) {
    case HomeActions.ON_CURRENT_LOCATION_UPDATED:
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

export { reducer as homeReducer };
