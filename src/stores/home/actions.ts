import { LocationType } from '../../assets/types';

export enum HomeActions {
  ON_CURRENT_LOCATION_UPDATED = 'onCurrentLocationUpdated',
}

export const setCurrentLocation = (newLocation: LocationType) => {
  return {
    payload: newLocation,
    type: HomeActions.ON_CURRENT_LOCATION_UPDATED,
  };
};
