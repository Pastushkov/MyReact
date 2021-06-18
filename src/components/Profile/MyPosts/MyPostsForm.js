import { Field } from "redux-form";

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"text"}
          name={"newPostText"}
          component={"textarea"}
        />
      </div>
      <div>
        <button>Send post</button>
      </div>
    </form>
  );
};
export default MyPostsForm;
