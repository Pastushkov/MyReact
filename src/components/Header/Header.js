import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <img className={style.header__logo} alt='1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Lens_-_new_logo.png/600px-Google_Lens_-_new_logo.png" />
    </header>
  );
}

export default Header;
