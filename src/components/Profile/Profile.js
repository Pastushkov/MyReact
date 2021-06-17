import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="">
      <ProfileInfo
        updateUserStatus={props.updateUserStatus}
        status={props.status}
        profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
