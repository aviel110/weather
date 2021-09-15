import { LocationType } from '../../assets/types';

export enum LocationsActions {
  ON_CURRENT_LOCATION_UPDATED = 'onCurrentLocationUpdated',
  ON_FAVORITES_UPDATED = 'onFavoritesUpdated',
  ON_DELETE_FAVORITE = 'onDeleteFavorite',
  ON_ADD_FAVORITE = 'onAddFavorite',
}

export const setCurrentLocation = (newLocation: LocationType) => {
  return {
    payload: newLocation,
    type: LocationsActions.ON_CURRENT_LOCATION_UPDATED,
  };
};

export const onFavoritesUpdated = (newFavoritesArray: LocationType[]) => {
  return {
    payload: newFavoritesArray,
    type: LocationsActions.ON_FAVORITES_UPDATED,
  };
};

export const onDeleteFavorite = (keyToDelete: string) => {
  return {
    payload: keyToDelete,
    type: LocationsActions.ON_DELETE_FAVORITE,
  };
};

export const onAddFavorite = (locationToAdd: LocationType) => {
  return {
    payload: locationToAdd,
    type: LocationsActions.ON_ADD_FAVORITE,
  };
};
