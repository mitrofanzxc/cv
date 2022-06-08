import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ISTATE } from '../../shared/interface';

import { Header } from '../index';

const Layout: FC<ISTATE> = ({
  useScrollToTop,
  useSwitchTheme,
  language,
  theme,
  setLanguage,
  setTheme,
}) => {
  return (
    <>
      <Header
        useScrollToTop={useScrollToTop}
        useSwitchTheme={useSwitchTheme}
        language={language}
        theme={theme}
        setLanguage={setLanguage}
        setTheme={setTheme}
      />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
