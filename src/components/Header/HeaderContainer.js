import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, setToggleFetching } from "../../state/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleFetching(true);
    axios

      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((responce) => { 
        this.props.setToggleFetching(false);
        if (responce.data.resultCode === 0) {
          let { id, email, login } = responce.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
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
})(HeaderContainer);
