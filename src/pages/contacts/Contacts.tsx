import { FC } from 'react';
import { ISTATE } from '../../shared/interface';
import { LOCALIZATION } from '../../shared/localization';

import { Title } from '../../components/title/Title';
import { SOCIALS_LIST } from '../../shared/socials';
import { List } from '../../components/list/List';

import './Contacts.scss';

const Contacts: FC<ISTATE> = ({ useScrollToTop, useSwitchTheme, language, theme }) => {
  const LANG = language as keyof typeof LOCALIZATION;
  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="contacts-page">
      <Title
        firstWord={LOCALIZATION[LANG].getIn}
        secondWord={LOCALIZATION[LANG].touch}
        bgWord={LOCALIZATION[LANG].contacts}
        theme={theme}
      />
      <List list={SOCIALS_LIST} language={LANG} />
    </section>
  );
};

export { Contacts };
