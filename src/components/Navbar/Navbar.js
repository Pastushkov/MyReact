import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = (props) => {  
  let pagesElements = props.pages.map((p) => (
    <div className={style.item}>
      <NavLink to={p.to} activeClassName={style.activeLink}>
        {p.page}
      </NavLink>
    </div>
  ));

  return <nav className={style.nav}>{pagesElements}</nav>;
};

export default Navbar;