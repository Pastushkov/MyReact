import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  setToggleFollowingProgress,
  requestUsers,
} from "../../state/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../state/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChange = (pageNumber) => {
    let {pageSize }= this.props
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setToggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
