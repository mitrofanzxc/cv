import { FC } from 'react';
import { ISTATE } from '../../shared/interface';
import { LOCALIZATION } from '../../shared/localization';

import './NotFound.scss';

const NotFound: FC<ISTATE> = ({ useScrollToTop, useSwitchTheme, language }) => {
  const LANG = language as keyof typeof LOCALIZATION;
  useScrollToTop();
  useSwitchTheme();

  return (
    <section data-testid="NotFoundPage" className="notfound">
      <h1 className="h1">404</h1>
      <h2 className="h2">{LOCALIZATION[LANG].notFound}</h2>
      <h3 className="h3">{LOCALIZATION[LANG].resourseRequest}</h3>
    </section>
  );
};

export { NotFound };
