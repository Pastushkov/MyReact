import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls/FormsControls";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <MessageItem key={message.id} message={message.message} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  const maxLenght50 = maxLengthCreator(50);

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          name={"newMessageText"}
          placeholder={"Enter new message"}
          validate={[required,maxLenght50]}
        />
        <button>Send</button>
      </form>
    );
  };

  const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm",
  })(AddMessageForm);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
