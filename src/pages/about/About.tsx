import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { LOCALIZATION } from '../../shared/localization';
import { SKILLS_LIST } from '../../shared/skills';
import { Title, List } from '../../components';
import './About.scss';

const About: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="about-page">
      <Title
        firstWord={isLanguageEn ? LOCALIZATION.en.about : LOCALIZATION.ru.about}
        secondWord={isLanguageEn ? LOCALIZATION.en.me : LOCALIZATION.ru.me}
        bgWord={isLanguageEn ? LOCALIZATION.en.resume : LOCALIZATION.ru.resume}
      />
      <List list={SKILLS_LIST} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { About };
