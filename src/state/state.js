import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
   
    
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    console.log("changed");
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navBar = navBarReducer(this._state.navBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;