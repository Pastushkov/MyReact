import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_STATUS = "SET-STATUS";
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
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_STATUS:
      return { ...state, status: action.status };
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

export const getUserProfile = (userId) => {
  return (dispatch) => {
    dispatch(setToggleFetching(true));
    usersAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
      dispatch(setToggleFetching(false));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) dispatch(setStatus(status));
    });
  };
};

export default profileReducer;
