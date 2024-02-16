import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunk  from "redux-thunk";
import reducer from "./reducer";

// const composeDevExtension =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
