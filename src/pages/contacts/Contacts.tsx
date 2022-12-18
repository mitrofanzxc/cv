import { FC } from 'react';
import { useAppSelector } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Title, List } from 'components';
import { Localization, SocialsMock } from '../../constants';
import './Contacts.scss';

const Contacts: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="contacts-page">
      <Title
        firstWord={isLanguageEn ? Localization.en.getIn : Localization.ru.getIn}
        secondWord={isLanguageEn ? Localization.en.touch : Localization.ru.touch}
        bgWord={isLanguageEn ? Localization.en.contacts : Localization.ru.contacts}
      />
      <a
        href="https://drive.google.com/file/d/1jU63AOhtD3uks_hfX9_VgPH8_TWDW6NH/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
        className="h2 title"
      >
        {isLanguageEn ? Localization.en.cv : Localization.ru.cv}
      </a>
      <List list={SocialsMock} isLanguageEn={isLanguageEn} />
      <Title
        firstWord={isLanguageEn ? Localization.en.self : Localization.ru.self}
        secondWord={isLanguageEn ? Localization.en.introduction : Localization.ru.introduction}
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
