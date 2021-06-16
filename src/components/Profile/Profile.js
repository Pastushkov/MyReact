import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="">
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>     
    </div>
  );
};

export default Profile;
