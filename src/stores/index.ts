import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { favoritesReducer, FavoritesState } from './favorites/reducer';
import thunk from 'redux-thunk';

export interface ApplicationState {
  favoritesState: FavoritesState;
}

const reducers = combineReducers<ApplicationState>({
  favoritesState: favoritesReducer,
});

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
