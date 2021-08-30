import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { favoritesReducer, FavoritesState } from './favorites/reducer';
import thunk from 'redux-thunk';
import { homeReducer, HomeState } from './home/reducer';

export interface ApplicationState {
  homeState: HomeState;
  favoritesState: FavoritesState;
}

const reducers = combineReducers<ApplicationState>({
  favoritesState: favoritesReducer,
  homeState: homeReducer,
});

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
