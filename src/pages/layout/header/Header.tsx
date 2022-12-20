import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch, setThemeByAmount, setLanguageByAmount } from 'store';
import { useScrollToTop, useSwitchTheme, useSetLocalStorage } from 'hooks';
import { Paths } from '../../../constants';
import Sprite from '../../../assets/images/sprite.svg';
import './Header.scss';

const Header: FC = () => {
  const { main, about, portfolio, certificates, contacts } = Paths;

  const theme = useAppSelector(({ theme: { value } }) => value);
  const language = useAppSelector(({ language: { value } }) => value);
  const dispatch = useAppDispatch();

  const handleLanguage = () => {
    dispatch(setLanguageByAmount(!language));
  };

  const handleTheme = () => {
    dispatch(setThemeByAmount(!theme));
  };

  useSetLocalStorage('theme');
  useSetLocalStorage('language');
  useSetLocalStorage('modal');
  useSwitchTheme();
  useScrollToTop();

  return (
    <header data-testid="header" className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink to={main} end className="nav-list__link">
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#main`} />
              </svg>
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to={about} className="nav-list__link">
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#about`} />
              </svg>
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to={portfolio} className="nav-list__link">
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#portfolio`} />
              </svg>
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to={certificates} className="nav-list__link">
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#certificates`} />
              </svg>
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to={contacts} className="nav-list__link">
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#contacts`} />
              </svg>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-list nav-list-secondary">
          <li className="nav-list__item">
            <button
              className="nav-list__link"
              type="button"
              aria-label="Change language"
              onClick={handleLanguage}
            >
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#${language ? 'en' : 'ru'}`} />
              </svg>
            </button>
          </li>
          <li className="nav-list__item">
            <button
              className={`nav-list__link ${theme ? 'dark' : 'light'}`}
              type="button"
              aria-label="Change theme"
              onClick={handleTheme}
            >
              <svg className="nav-list__img">
                <use xlinkHref={`${Sprite}#${theme ? 'dark' : 'light'}`} />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
