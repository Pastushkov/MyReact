import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navBar: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
