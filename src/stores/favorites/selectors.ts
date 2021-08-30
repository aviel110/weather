import { ApplicationState } from '..';

export const getFavoritesSelector = (state: ApplicationState) => state.favoritesState.favorites;
