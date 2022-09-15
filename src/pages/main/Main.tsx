import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { LOCALIZATION } from '../../shared/localization';
import { Image } from '../../components/image/Image';
import Avatar from '../../images/avatar.jpg';
import AvatarSmall from '../../images/avatar-small.jpg';
import './Main.scss';

const Main: FC = () => {
  const language = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <>
      <section data-testid="mainpage" className="main-page">
        <div className="avatar__wrapper">
          <Image
            src={Avatar}
            srcSmall={AvatarSmall}
            alt={language ? LOCALIZATION.en.name : LOCALIZATION.ru.name}
            className="avatar"
          />
        </div>
        <div className="home__container">
          <h1 className="h1">{language ? LOCALIZATION.en.name : LOCALIZATION.ru.name}</h1>
          <h2 className="h2">
            {language ? LOCALIZATION.en.specialization : LOCALIZATION.ru.specialization}
          </h2>
          <div className="home__about">
            {language ? LOCALIZATION.en.aboutMe : LOCALIZATION.ru.aboutMe}
          </div>
        </div>
      </section>
      <div className="color__block" />
    </>
  );
};

export { Main };
