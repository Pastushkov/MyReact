import { Field } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newMessageText"}
        placeholder={"Enter new message"}
      />
      <button>Send</button>
    </form>
  );
};
export default AddMessageForm;
