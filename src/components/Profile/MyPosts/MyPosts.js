import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"text"}
          name={"newPostText"}
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Send post</button>
      </div>
    </form>
  );
};
const MyPosts = React.memo((props) => {
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
      <PostReduxFrom onSubmit={addPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
