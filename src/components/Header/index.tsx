import { FC } from 'react';
import { useAppSelector, useAppDispatch, setThemeByAmount, setLanguageByAmount } from 'store';
import { useSetLocalStorage } from 'hooks';
import { ButtonPrimary, ButtonNav } from 'components';
import { Paths } from '../../constants';
import './style.scss';

const Header: FC = () => {
  const { main, about, portfolio, certificates, contacts } = Paths;

  const isThemeDark = useAppSelector(({ theme: { value } }) => value);
  const language = useAppSelector(({ language: { value } }) => value);
  const dispatch = useAppDispatch();

  const handleLanguage = () => {
    dispatch(setLanguageByAmount(!language));
  };

  const handleTheme = () => {
    dispatch(setThemeByAmount(!isThemeDark));
  };

  useSetLocalStorage('theme');
  useSetLocalStorage('language');

  return (
    <header data-testid="header" className="header">
      <nav className={`nav ${!isThemeDark ? 'nav_light' : ''}`}>
        <ul className="nav-list">
          <li className="nav-list__item">
            <ButtonNav path={main} svg="main" />
          </li>
          <li className="nav-list__item">
            <ButtonNav path={about} svg="about" />
          </li>
          <li className="nav-list__item">
            <ButtonNav path={portfolio} svg="portfolio" />
          </li>
          <li className="nav-list__item">
            <ButtonNav path={certificates} svg="certificates" />
          </li>
          <li className="nav-list__item">
            <ButtonNav path={contacts} svg="contacts" />
          </li>
        </ul>
        <ul className="nav-list nav-list-secondary">
          <li className="nav-list__item">
            <ButtonPrimary
              className="nav-list__link"
              ariaLabel="Change language"
              svg={`${language ? 'en' : 'ru'}`}
              onClick={handleLanguage}
            />
          </li>
          <li className="nav-list__item">
            <ButtonPrimary
              className={`nav-list__link ${isThemeDark ? 'dark' : 'light'}`}
              ariaLabel="Change theme"
              svg={`${isThemeDark ? 'dark' : 'light'}`}
              onClick={handleTheme}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
