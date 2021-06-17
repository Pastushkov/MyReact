import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  posts: [
    { id: 1, message: "Hi, lotus", likeCounts: 0 },
    { id: 2, message: "Hello World", likeCounts: 20 },
  ],
  newPostText: "text",
  profile: null,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCounts: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text,
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

export const getUserProfile = (userId) => {
  return (dispatch) => {
    dispatch(setToggleFetching(true));
    usersAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
      dispatch(setToggleFetching(false));
    });
  };
};

export default profileReducer;
