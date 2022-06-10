import { FC } from 'react';
import { ISTATE } from '../../shared/interface';
import { LOCALIZATION } from '../../shared/localization';
import { Title } from '../../components/title/Title';
import { List } from '../../components/list/List';
import { PORTFOLIO_LIST } from '../../shared/portfolio';

import './Portfolio.scss';

const Portfolio: FC<ISTATE> = ({ useScrollToTop, useSwitchTheme, language, theme }) => {
  const LANG = language as keyof typeof LOCALIZATION;
  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="portfolio-page">
      <Title
        firstWord={LOCALIZATION[LANG].myE}
        secondWord={LOCALIZATION[LANG].portfolio}
        bgWord={LOCALIZATION[LANG].works}
        theme={theme}
      />
      <List list={PORTFOLIO_LIST} language={LANG} />
    </section>
  );
};

export { Portfolio };
