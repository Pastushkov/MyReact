import { reduxForm } from "redux-form";
import {
  CreateField,
  Input,
  Textarea,
} from "../../common/FormControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit,error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div>
         {error} 
          </div>}
      <div>
        <b>Full name:</b> {CreateField(null, "Full name", "fullName", Input)}
      </div>
      <div>
        <b>About me:</b> {CreateField([], "About me", "aboutMe", Textarea)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {CreateField([], "", "lookingForAJob", Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {CreateField(
          [],
          "My proffesion skills",
          "lookingForAJobDescription",
          Textarea
        )}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} >
              <b>{key}</b>: {CreateField([],key,"contacts."+key,Input)}
            </div>
          );
        })}
      </div>
  
    </form>
  );
};
let ProfileDataReduxForm = reduxForm({ form: "editProfile" })(ProfileDataForm);
export default ProfileDataReduxForm;
