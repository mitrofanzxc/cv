import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop, useSwitchTheme } from './features';
import { PATHS } from './shared/routes';
import { Layout, NotFound, Main, About, Portfolio, Certificates, Contacts } from './pages';

const App: FC = () => {
  const { main, about, portfolio, certificates, contacts, notFound } = PATHS;

  const [isEn, setIsEn] = useState<string>('en');
  const [isDark, setIsDark] = useState<string>('dark');

  const setLanguage = () => {
    if (isEn === 'en') {
      setIsEn('ru');
    } else {
      setIsEn('en');
    }
  };

  const setTheme = () => {
    if (isDark === 'dark') {
      setIsDark('light');
    } else {
      setIsDark('dark');
    }
  };

  useScrollToTop();
  useSwitchTheme();

  return (
    <Routes>
      <Route
        path={main}
        element={
          <Layout
            useScrollToTop={useScrollToTop}
            useSwitchTheme={useSwitchTheme}
            language={isEn}
            theme={isDark}
            setLanguage={setLanguage}
            setTheme={setTheme}
          />
        }
      >
        <Route
          index
          element={
            <Main
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={about}
          element={
            <About
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={portfolio}
          element={
            <Portfolio
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={certificates}
          element={
            <Certificates
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={contacts}
          element={
            <Contacts
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={notFound}
          element={
            <NotFound
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export { App };
