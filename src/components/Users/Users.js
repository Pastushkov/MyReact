import React from "react";
import userPhoto from "./../../assets/images/user.png";
import style from "./users.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              onClick={(e) => {
                props.onPageChange(p);
              }}
              className={
                props.currentPage === p ? style.selectedPage : style.page
              }
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={style.user}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  alt=""
                  className={style.avatar}
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id===u.id)}
                  onClick={() => {
                    props.setToggleFollowingProgress(true,u.id);
                    usersAPI.unFollowUser(u.id).then((data) => {
                      props.setToggleFollowingProgress(false, u.id);
                      if (data.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id===u.id)}
                  onClick={() => {
                    props.setToggleFollowingProgress(true,u.id);
                    usersAPI.followUser(u.id).then((data) => {
                      props.setToggleFollowingProgress(false,u.id);
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
