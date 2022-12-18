import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch, setThemeByAmount, setLanguageByAmount } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Paths } from '../../../constants';
import './Header.scss';

const Header: FC = () => {
  const { main, about, portfolio, certificates, contacts } = Paths;

  const theme = useAppSelector(({ theme: { value } }) => value);
  const language = useAppSelector(({ language: { value } }) => value);
  const dispatch = useAppDispatch();

  useScrollToTop();
  useSwitchTheme();

  return (
    <header data-testid="header" className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink to={main} end className="nav__list-item__link home" />
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
            <button
              className={`nav__list-item__link ${language ? 'en' : 'ru'}`}
              type="button"
              aria-label="Change language"
              onClick={() => dispatch(setLanguageByAmount(!language))}
            />
          </li>
          <li className="nav__list-item">
            <button
              className={`nav__list-item__link ${theme ? 'dark' : 'light'}`}
              type="button"
              aria-label="Change theme"
              onClick={() => dispatch(setThemeByAmount(!theme))}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
