import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED = "SET-INITIALIZED";
let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSucces = () => {
  return { type: SET_INITIALIZED };
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;
