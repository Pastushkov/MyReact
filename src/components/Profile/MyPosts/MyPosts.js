import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";
import { reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.message} message={p.message} likeCounts={p.likeCounts} />
  ));

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };
 
  const PostReduxFrom = reduxForm({
    form: "addNewPostForm",
  })(MyPostsForm);

  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <PostReduxFrom onSubmit={addPost}/>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
