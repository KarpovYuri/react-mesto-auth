import { Link, Route } from 'react-router-dom';

function Header({ loggedIn, email, onLogout }) {
  return (
    <header className={`${loggedIn ? 'header header_mobile' : 'header'}`}>
      <a href="#" aria-label="Логотип Mesto Russia" className="header__logo fade-opacity"></a>
      <Route path="/sign-in">
        <Link to='sign-up' className="header__link fade-opacity">Регистрация</Link>
      </Route>
      <Route path="/sign-up">
        <Link to='sign-in' className="header__link fade-opacity">Войти</Link>
      </Route>
      <Route exact path="/">
        <div className={'profile-menu'}>
          <p className="profile-menu__email">{email}</p>
          <Link to='sign-in' onClick={() => onLogout()} className="profile-menu__link fade-opacity">Выйти</Link>
        </div>
      </Route>
    </header>
  );
}


export default Header;
