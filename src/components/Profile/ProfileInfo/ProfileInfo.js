import style from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          alt="1"
          src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="
        />
      </div>
      <div className={style.profile}>
        <img alt="1" src={props.profile.photos.large} />
        <div>{props.profile.fullName}</div>
          <ProfileStatus status={"Hello world1111!"}/>
  
        <div className={style.profile__description}>
          {props.profile.aboutMe}
        </div>
        <div className={style.profile__contacts}>
          {props.profile.contacts.facebook}
        </div>
        {props.profile.lookingForAJob ? (
          <div>
            I am looking for a job! "{props.profile.lookingForAJobDescription}"
          </div>
        ) : (
          <div>I am don't looking for a job!</div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
