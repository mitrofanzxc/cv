import { FC } from 'react';
import { ISTATE } from '../../shared/interface';
import { LOCALIZATION } from '../../shared/localization';

import { Title } from '../../components/title/Title';
import { SKILLS_LIST } from '../../shared/skills';
import { List } from '../../components/list/List';

import './About.scss';

const About: FC<ISTATE> = ({ useScrollToTop, useSwitchTheme, language, theme }) => {
  const LANG = language as keyof typeof LOCALIZATION;
  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="about-page">
      <Title
        firstWord={LOCALIZATION[LANG].about}
        secondWord={LOCALIZATION[LANG].me}
        bgWord={LOCALIZATION[LANG].resume}
        theme={theme}
      />
      <List list={SKILLS_LIST} language={LANG} />
    </section>
  );
};

export { About };
