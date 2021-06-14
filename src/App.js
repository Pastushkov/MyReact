import { Route } from "react-router";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <NavbarContainer/>
      <div className="wrapper_content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer  />}
        />

        <Route
          path="/profile"
          render={() => (
            <Profile 
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
