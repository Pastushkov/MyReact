import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer  from "./navBarReducer";


let reducers = combineReducers({
    profilePage: profileReducer,  
    dialogsPage: dialogsReducer,
    navBar: navBarReducer   
});

let store = createStore(reducers);

export default store;