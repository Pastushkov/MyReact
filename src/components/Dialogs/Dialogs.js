import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import { reduxForm } from "redux-form";
import AddMessageForm from "./AddMessageForm";

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

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

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
