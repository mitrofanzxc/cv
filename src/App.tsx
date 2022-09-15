import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop, useSwitchTheme } from './features';
import { PATHS } from './shared/routes';
import { Layout, NotFound, Main, About, Portfolio, Certificates, Contacts } from './pages';

const App: FC = () => {
  const { main, about, portfolio, certificates, contacts, notFound } = PATHS;

  useScrollToTop();
  useSwitchTheme();

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={about} element={<About />} />
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
        <Route path={notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
