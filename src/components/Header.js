import { Link, Route } from 'react-router-dom';

function Header({ loggedIn, email, onLogout }) {
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
      <Route exact path="/">
        <div className={'header__user-menu'}>
          <p className='header__email'>{email}</p>
          <Link to='sign-in'
            onClick={() => onLogout()}
            className='header__link header__link_login'>
            Выйти
          </Link>
        </div>
      </Route>
    </header>
  );
}


export default Header;
