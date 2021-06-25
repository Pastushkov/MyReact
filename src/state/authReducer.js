import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const TOGGLE_IS_FETCHING = "auth/TOGGLE-IS-FETCHING";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.captchaUrl };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
  };
};

export const setToggleFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const getCaptchaUrlSucces = (captchaUrl) => {
  return {
    type: SET_CAPTCHA_URL,
    captchaUrl,
  };
};

export const getAuthUserData = () => async (dispatch) => {
  dispatch(setToggleFetching(true));
  let responce = await authAPI.authMe();

  if (responce.resultCode === 0) {
    let { id, email, login } = responce.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
  dispatch(setToggleFetching(false));
};

export const login = (email, password, rememberMe,captchaUrl) => async (dispatch) => {
  let responce = await authAPI.login(email, password, rememberMe,captchaUrl);
  if (responce.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (responce.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message =
      responce.data.messages.length > 0
        ? responce.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let responce = await securityAPI.getCaptchUrl();
  dispatch(getCaptchaUrlSucces(responce.url));
};

export const logout = () => async (dispatch) => {
  let responce = await authAPI.logout();
  if (responce.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
