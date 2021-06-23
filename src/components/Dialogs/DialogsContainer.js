import { connect } from "react-redux";
import { addMessage } from "../../state/dialogsReducer";
import Dialogs from "./Dialogs";
import { widthAuthRedirect } from "../../hoc/widthAuthRedirect";
import { compose } from "redux";
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessage(newMessageText));
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  widthAuthRedirect
)(Dialogs);
