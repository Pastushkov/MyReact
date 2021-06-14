import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <MessageItem key={message.id} message={message.message} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogElements}</div>

      <div className={style.messages}>{messagesElements}</div>
      <div>
        <textarea
          ref={newMessage}
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
        />{" "}
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
