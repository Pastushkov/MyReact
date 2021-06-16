import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setToggleFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../state/usersReducer";
import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setToggleFetching(false);
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsersCount(responce.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setToggleFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setToggleFetching(false);
        this.props.setUsers(responce.data.items);
      });
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
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleFetching,
})(UsersContainer);
