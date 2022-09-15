import { FC } from 'react';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { useAppSelector } from '../../app/hooks';
import { Title, List } from '../../components';
import { LOCALIZATION } from '../../shared/localization';
import { SOCIALS_LIST } from '../../shared/socials';
import './Contacts.scss';

const Contacts: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="contacts-page">
      <Title
        firstWord={isLanguageEn ? LOCALIZATION.en.getIn : LOCALIZATION.ru.getIn}
        secondWord={isLanguageEn ? LOCALIZATION.en.touch : LOCALIZATION.ru.touch}
        bgWord={isLanguageEn ? LOCALIZATION.en.contacts : LOCALIZATION.ru.contacts}
      />
      <List list={SOCIALS_LIST} isLanguageEn={isLanguageEn} />
      <Title
        firstWord={isLanguageEn ? LOCALIZATION.en.self : LOCALIZATION.ru.self}
        secondWord={isLanguageEn ? LOCALIZATION.en.introduction : LOCALIZATION.ru.introduction}
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
