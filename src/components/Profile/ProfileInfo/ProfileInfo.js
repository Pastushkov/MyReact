import style from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";
//import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/user.png";
import { useState } from "react";
import ProfileDataReduxForm from "./ProfileDataForm";
const ProfileInfo = ({
  savePhoto,
  profile,
  status,
  updateUserStatus,
  isOwner,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    debugger;
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit =  (formData) => {
    saveProfile(formData).then(
      ()=>{
        setEditMode(false);
      }
    );
  };

  return (
    <div>
      <div>
        <img
          alt="1"
          src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="
        />
      </div>
      <div>
        <img
          alt="1"
          src={profile.photos.large || userPhoto}
          className={style.avatar}
        />
      </div>
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected}></input>}
      <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      {editMode ? (
        <ProfileDataReduxForm
          profile={profile}
          onSubmit={onSubmit}
          initialValues={profile}
        />
      ) : (
        <ProfileData
          profile={profile}
          goToEditMode={() => {
            setEditMode(true);
          }}
          isOwner={isOwner}
        />
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={style.profile}>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}

      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        {profile.lookingForAJob ? (
          <div>
            <b>I am looking for a job! </b>"{profile.lookingForAJobDescription}"
          </div>
        ) : (
          <div>
            <b>I am don't looking for a job!</b>
          </div>
        )}
      </div>
      <div className={style.profile__contacts}>
        <b>Contacts:</b>

        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileInfo;
