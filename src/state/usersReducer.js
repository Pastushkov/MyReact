import { usersAPI } from "../api/api";
import { updateObjectinArray } from "../utils/helpers/objectHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

export const setToggleFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const setToggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setToggleFetching(true));
  dispatch(setCurrentPage(page));
  let responce = await usersAPI.getUsers(page, pageSize);
  dispatch(setToggleFetching(false));
  dispatch(setUsers(responce.items));
  dispatch(setTotalUsersCount(responce.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCR) => {
  dispatch(setToggleFollowingProgress(true, userId));
  let responce = await apiMethod(userId);
  if (responce.resultCode === 0) {
    dispatch(actionCR(userId));
  }
  dispatch(setToggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    followSuccess
  );
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowUser.bind(usersAPI),
    unfollowSuccess
  );
};

export default usersReducer;
