import { combineReducers, createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { destinationReducer, motosReducer, userReducer } from './reducers';

const appReducers = combineReducers({
  user: userReducer,
  destination: destinationReducer,
  motos: motosReducer,
});

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware))
);

export type RootState = ReturnType<typeof appReducers>;
