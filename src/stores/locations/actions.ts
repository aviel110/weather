import { LocationType } from '../../assets/types';

export enum LocationsActions {
  ON_CURRENT_LOCATION_UPDATED = 'onCurrentLocationUpdated',
  ON_FAVORITES_UPDATED = 'onFavoritesUpdated',
  ON_FAVORITE_DELETE = 'onFavoriteDelete',
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

export const onFavoriteDelete = (keyToDelete: string) => {
  console.log('🚀 ~ file: actions.ts ~ line 29 ~ onFavoriteDelete ~ keyToDelete', keyToDelete);

  return {
    payload: keyToDelete,
    type: LocationsActions.ON_FAVORITE_DELETE,
  };
};
