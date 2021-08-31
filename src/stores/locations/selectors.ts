import { ApplicationState } from '..';

export const getCurrentLocationSelector = (state: ApplicationState) => state.locationsState.currentLocation;
export const getFavoritesSelector = (state: ApplicationState) => state.locationsState.favorites;
