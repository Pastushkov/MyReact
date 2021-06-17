import { connect } from "react-redux";
import { addMessage, updateMessageText } from "../../state/dialogsReducer";
import Dialogs from "./Dialogs";
import { widthAuthRedirect } from "../../hoc/widthAuthRedirect";
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let AuthRedirectComponent = widthAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  updateMessageText,
})(AuthRedirectComponent);

export default DialogsContainer;
