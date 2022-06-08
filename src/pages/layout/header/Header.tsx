import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';
import { ISTATE } from '../../../shared/interface';

import './Header.scss';

const Header: FC<ISTATE> = ({ language, theme, setLanguage, setTheme }) => {
  const { main, about, portfolio, certificates, contacts } = PATHS;

  return (
    <header data-testid="header" className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink to={main} className="nav__list-item__link home" />
          </li>
          <li className="nav__list-item">
            <NavLink to={about} className="nav__list-item__link about" />
          </li>
          <li className="nav__list-item">
            <NavLink to={portfolio} className="nav__list-item__link portfolio" />
          </li>
          <li className="nav__list-item">
            <NavLink to={certificates} className="nav__list-item__link certificates" />
          </li>
          <li className="nav__list-item">
            <NavLink to={contacts} className="nav__list-item__link contacts" />
          </li>
        </ul>
        <ul className="nav__list nav__list-secondary">
          <li className="nav__list-item">
            <div
              className={`nav__list-item__link ${language}`}
              role="button"
              onClick={setLanguage}
            />
          </li>
          <li className="nav__list-item">
            <div className={`nav__list-item__link ${theme}`} role="button" onClick={setTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
