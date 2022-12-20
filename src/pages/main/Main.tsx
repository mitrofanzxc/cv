import { FC } from 'react';
import { useAppSelector } from 'store';
import { Image } from 'components';
import { Localization } from '../../constants';
import Avatar from '../../assets/images/avatar.jpg';
import AvatarSmall from '../../assets/images/avatar-small.jpg';
import './Main.scss';

const Main: FC = () => {
  const language = useAppSelector(({ language: { value } }) => value);

  return (
    <>
      <section data-testid="mainpage" className="main-page">
        <div className="avatar">
          <Image
            src={Avatar}
            srcSmall={AvatarSmall}
            alt={language ? Localization.en.name : Localization.ru.name}
            className="avatar__img"
          />
        </div>
        <div className="main-page__info">
          <h1 className="h1">{language ? Localization.en.name : Localization.ru.name}</h1>
          <h2 className="h2">
            {language ? Localization.en.specialization : Localization.ru.specialization}
          </h2>
          <div className="main-page__about">
            {language ? Localization.en.aboutMe : Localization.ru.aboutMe}
          </div>
        </div>
      </section>
      <div className="bg-block" />
    </>
  );
};

export { Main };
