// src/store/index.js
import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";
import playersReducer from "./players/reducer";

// is the setup of the devtools.
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

//
const store = createStore(
  combineReducers({
    balance: balanceReducer,
    players: playersReducer,
  }),
  enhancer
);

export default store;
