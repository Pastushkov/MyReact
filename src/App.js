import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./state/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import { initializeApp } from "./state/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/preloader";
import { widthSuspence } from "./hoc/widthSuspence";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    const catchAllUnhandledErrors = (reason, promise) => {
      alert("" + promise + " " + reason);
    };
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
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
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                <Redirect to={"/profile"} />;
              }}
            />
            <Route path="/dialogs" render={widthSuspence(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={widthSuspence(ProfileContainer)}
            />
            <Route path="/users" render={() => <UsersContainer />} />

            <Route path="/login" render={widthSuspence(Login)} />

            <Route
              path="/news"
              render={() => {
                return <div>News</div>;
              }}
            />

            <Route
              path="/music"
              render={() => {
                return <div>Music</div>;
              }}
            />

            <Route
              path="/settings"
              render={() => {
                return <div>settings</div>;
              }}
            />

            <Route
              path="*"
              render={() => {
                return <div>404 not found</div>;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  connect(mapStateToProps, {
    initializeApp,
  })(App)
);
const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
