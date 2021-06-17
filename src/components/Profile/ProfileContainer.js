import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "../../state/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/preloader";
//import { widthAuthRedirect } from "../../hoc/widthAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 17692;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <div>
          <Profile {...this.props} profile={this.props.profile} />
        </div>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
  }),
  withRouter,
 // widthAuthRedirect
)(ProfileContainer);
