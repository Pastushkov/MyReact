import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../state/profileReducer";
import Profile from "./Profile";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if(!userId){
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <>
        <div>
          <Profile
            updateUserStatus={this.props.updateStatus}
            status={this.props.status}
            {...this.props}
            profile={this.props.profile}
          />
        </div>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter
)(ProfileContainer);
