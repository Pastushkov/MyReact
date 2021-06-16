import { connect } from "react-redux";
import { addMessage, updateMessageText } from "../../state/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  updateMessageText,
})(Dialogs);

export default DialogsContainer;
