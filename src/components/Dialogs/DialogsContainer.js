import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../state/dialogsReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,    
  };
};

let mapDispachToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(Dialogs);

export default DialogsContainer;
