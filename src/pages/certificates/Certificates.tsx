import { FC } from 'react';
import { ISTATE } from '../../shared/interface';
import { LOCALIZATION } from '../../shared/localization';

import { Title } from '../../components/title/Title';
import { CERTIFICATES_LIST } from '../../shared/certificates';
import { List } from '../../components/list/List';

import './Certificates.scss';

const Certificates: FC<ISTATE> = ({ useScrollToTop, useSwitchTheme, language, theme }) => {
  const LANG = language as keyof typeof LOCALIZATION;
  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="certificates-page">
      <Title
        firstWord={LOCALIZATION[LANG].myI}
        secondWord={LOCALIZATION[LANG].certificates}
        bgWord={LOCALIZATION[LANG].awards}
        theme={theme}
      />
      <List list={CERTIFICATES_LIST} language={LANG} />
    </section>
  );
};

export { Certificates };
