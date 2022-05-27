import { Link, Route } from 'react-router-dom';

function Header({ loggedIn }) {
  return (
    <header className="header">
      <a href="#" aria-label="Логотип Mesto Russia" className="header__logo fade-opacity"></a>
      <Route path="/sign-in">
        <Link to='sign-up'
          className={`${loggedIn ? 'header__link' : 'header__link header__link_login'}`}>
          Регистрация
        </Link>
      </Route>
      <Route path="/sign-up">
        <Link to='sign-in'
          className={`${loggedIn ? 'header__link' : 'header__link header__link_login'}`}>
          Войти
        </Link>
      </Route>
    </header>
  );
}


export default Header;
