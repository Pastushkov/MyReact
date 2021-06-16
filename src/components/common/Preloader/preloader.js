import preloader from './../../../assets/images/preloader.gif';
import style from "./../../Users/users.module.css"

let Preloader = (props) => {
  return <img className={style.fetching} alt="rounded" src={preloader} />;
};

export default Preloader;
