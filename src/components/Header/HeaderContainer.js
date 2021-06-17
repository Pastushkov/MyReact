import React from "react";
import { connect } from "react-redux";
import {
  setAuthUserData,
  setToggleFetching,
  Auth,
} from "../../state/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.Auth();
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, {
  setAuthUserData,
  setToggleFetching,
  Auth,
})(HeaderContainer);
