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
      <Title
        firstWord={LOCALIZATION[LANG].self}
        secondWord={LOCALIZATION[LANG].introduction}
        theme={theme}
      />
      <div className="iframe__wrapper">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/TXFqCdTC6dk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export { Contacts };
