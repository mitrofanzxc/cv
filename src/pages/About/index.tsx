import { FC } from 'react';
import { useAppSelector } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Title, List } from 'components';
import { Localization, SkillsMock } from '../../constants';
import './style.scss';

const About: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="about-page">
      <Title
        firstWord={isLanguageEn ? Localization.en.about : Localization.ru.about}
        secondWord={isLanguageEn ? Localization.en.me : Localization.ru.me}
        bgWord={isLanguageEn ? Localization.en.resume : Localization.ru.resume}
      />
      <List data={SkillsMock} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { About };
