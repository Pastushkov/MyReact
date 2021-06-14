import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          return (
            <Navbar pages={state.navBar.pages} />
          );
        }

      }
    </StoreContext.Consumer>
  );
};

export default NavbarContainer;