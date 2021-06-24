import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChange,
  users,
  followingInProgress,
  follow,
  unfollow,
  ...props
}) => {
  return (
    <div>
      <div>
        <Paginator
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
