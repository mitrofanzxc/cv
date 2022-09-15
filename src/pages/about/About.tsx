import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { LOCALIZATION } from '../../shared/localization';
import { SKILLS_LIST } from '../../shared/skills';
import { Title, List } from '../../components';

import './About.scss';

const About: FC = () => {
  const language = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="about-page">
      <Title
        firstWord={language ? LOCALIZATION.en.about : LOCALIZATION.ru.about}
        secondWord={language ? LOCALIZATION.en.me : LOCALIZATION.ru.me}
        bgWord={language ? LOCALIZATION.en.resume : LOCALIZATION.ru.resume}
      />
      <List list={SKILLS_LIST} language={language ? 'en' : 'ru'} />
    </section>
  );
};

export { About };
