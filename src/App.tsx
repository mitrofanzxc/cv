import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Layout, NotFound, Main, About, Portfolio, Certificates, Contacts } from 'pages';
import { Paths } from './constants';

const App: FC = () => {
  const { main, about, portfolio, certificates, contacts, notFound } = Paths;

  useScrollToTop();
  useSwitchTheme();

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={about} element={<About />} />
        <Route path={portfolio} element={<Portfolio />} />
        <Route path={certificates} element={<Certificates />} />
        <Route path={contacts} element={<Contacts />} />
        <Route path={notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
