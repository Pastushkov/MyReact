import { connect } from "react-redux";
import { addPostActionCreator } from "../../../state/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;
