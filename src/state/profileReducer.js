import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCES = "SAVE-PHOTO-SUCCES";

let initialState = {
  posts: [
    { id: 1, message: "Hi, lotus", likeCounts: 0 },
    { id: 2, message: "Hello World", likeCounts: 20 },
  ],
  profile: null,
  isFetching: false,
  status: " ",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostText,
        likeCounts: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCES:
      return { ...state, profile: { ...state.profile }, photos: action.photos };
    default:
      return state;
  }
};

export let addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export let setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setToggleFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const savePhotoSucces = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCES,
    photos,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch(setToggleFetching(true));
  let respoce = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfile(respoce));
  dispatch(setToggleFetching(false));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let responce = await profileAPI.getUserStatus(userId);
  dispatch(setStatus(responce));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let responce = await profileAPI.updateStatus(status);
  if (responce.resultCode === 0) dispatch(setStatus(status));
};

export const savePhoto = (file) => async (dispatch) => {
  let responce = await profileAPI.savePhoto(file);
  if (responce.resultCode === 0) dispatch(savePhotoSucces(responce.photos));
};

export default profileReducer;
