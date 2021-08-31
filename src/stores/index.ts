import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { locationsReducer, LocationsState } from './locations/reducer';

export interface ApplicationState {
  locationsState: LocationsState;
}

const reducers = combineReducers<ApplicationState>({
  locationsState: locationsReducer,
});

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
