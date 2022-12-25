import { FC } from 'react';
import { useAppSelector } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Image } from 'components';
import { Localization } from '../../constants';
import Avatar from '../../assets/images/avatar.jpg';
import AvatarSmall from '../../assets/images/avatar-small.jpg';
import './style.scss';

const Main: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);
  const isThemeDark = useAppSelector(({ theme: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <>
      <section data-testid="mainpage" className="main-page">
        <div className="avatar box-shadow">
          <Image
            src={Avatar}
            srcSmall={AvatarSmall}
            alt={isLanguageEn ? Localization.en.name : Localization.ru.name}
            className="avatar__img"
          />
        </div>
        <div className="main-page__info">
          <h1 className="h1">{isLanguageEn ? Localization.en.name : Localization.ru.name}</h1>
          <h2 className="h2">
            {isLanguageEn ? Localization.en.specialization : Localization.ru.specialization}
          </h2>
          <div className="main-page__about">
            {isLanguageEn ? Localization.en.aboutMe : Localization.ru.aboutMe}
          </div>
        </div>
      </section>
      <div className="bg-block" />
    </>
  );
};

export { Main };
