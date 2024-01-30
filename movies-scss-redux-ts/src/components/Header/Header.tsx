import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import type { RootState } from '../../store';
type TypeLocation = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: string | null;
}

export default function Header() {  
  const loggedIn: boolean = useSelector((state: RootState) => state.logged.loggedIn);
  const { pathname }: TypeLocation = useLocation();  
  const isMain: boolean = pathname === '/';
  const isMovies: boolean = pathname === '/movies';
  const isSavedMovies: boolean = pathname === '/saved-movies';
  const isProfile: boolean = pathname === '/profile';

  return (
    <header className={`header ${!isMain && "header_light"}`}>
      {isMain || isMovies || isSavedMovies || isProfile ?
        <header className="header__container">
          <Link className="header__logo" to="/" />
          {
            loggedIn ? <Navigation /> :
              <div className="header__links-authorization">
                <Link to="/sign-up" className={`header__link ${isMain && "header__link_type_light"}`}>
                  Регистрация
                </Link>
                <Link className="header__link header__link_type_login" to="/sign-in">Войти</Link>
              </div>
          }
        </header>
        : ''}
    </header>
  );
}
