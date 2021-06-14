import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    pages: state.navBar.pages,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
