import React from "react";
import { Route } from "react-router";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="wrapper_content">
        <Route path="/login" render={() => <Login />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
