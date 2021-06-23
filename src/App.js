import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./state/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./state/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="wrapper_content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let  AppContainer= compose(
  connect(mapStateToProps, {
    initializeApp,
  })(App)
);
const MainApp = (props) => {
 return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
};

export default MainApp;
