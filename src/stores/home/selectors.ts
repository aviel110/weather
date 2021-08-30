import { ApplicationState } from '..';

export const getCurrentLocationSelector = (state: ApplicationState) => state.homeState.currentLocation;
