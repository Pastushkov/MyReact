import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../state/authReducer";
import Header from "./Header";
import { logout } from "../../state/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, {
  getAuthUserData,
  logout,
})(HeaderContainer);
