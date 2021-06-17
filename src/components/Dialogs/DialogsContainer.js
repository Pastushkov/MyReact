import { connect } from "react-redux";
import { addMessage, updateMessageText } from "../../state/dialogsReducer";
import Dialogs from "./Dialogs";
import { widthAuthRedirect } from "../../hoc/widthAuthRedirect";
import { compose } from "redux";
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
    updateMessageText,
  }),
  widthAuthRedirect
)(Dialogs);
