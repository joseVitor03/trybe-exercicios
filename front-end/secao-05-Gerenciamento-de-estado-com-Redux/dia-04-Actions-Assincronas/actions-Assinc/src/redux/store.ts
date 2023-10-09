import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import dogReducer from "./reducers";

const store = createStore(combineReducers({ dogReducer }), composeWithDevTools(applyMiddleware(thunk)));

export default store;