import React from "react";
import style from "./ProfileInfo.module.css";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div className={style.profile__status}>
        {!this.state.editMode && (
          <div>
            <span
              onDoubleClick={
                this.activateEditMode.bind(this)
              }
            >
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={
                this.deactivateEditMode.bind(this)
              }
              value={this.props.status} autoFocus={true}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
