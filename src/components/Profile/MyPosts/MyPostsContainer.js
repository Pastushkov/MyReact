import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../state/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;
