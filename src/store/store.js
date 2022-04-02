import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { favouriteReducer } from "./Reducers/favorites";

export const store = createStore(favouriteReducer, composeWithDevTools());
