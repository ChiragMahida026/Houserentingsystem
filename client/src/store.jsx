import { composeWithDevTools } from "@redux-devtools/extension";
// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";

const rootReducer = combineReducers({});

// @ts-ignore
// import rootReducer from "./reducers";

// import rootReducer from "../reducers/RootReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,

  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
