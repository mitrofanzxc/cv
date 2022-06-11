import { FC } from 'react';
import { ISTATE } from '../../shared/interface';
import { LOCALIZATION } from '../../shared/localization';
import { Image } from '../../components/image/Image';

import Avatar from '../../images/avatar.jpg';
import AvatarSmall from '../../images/avatar-small.jpg';
import './Main.scss';

const Main: FC<ISTATE> = ({ useScrollToTop, useSwitchTheme, language }) => {
  const LANG = language as keyof typeof LOCALIZATION;
  useScrollToTop();
  useSwitchTheme();

  return (
    <>
      <section data-testid="mainpage" className="main-page">
        <div className="avatar__wrapper">
          <Image
            src={Avatar}
            srcSmall={AvatarSmall}
            alt={LOCALIZATION[LANG].name}
            className="avatar"
          />
        </div>
        <div className="home__container">
          <h1 className="h1">{LOCALIZATION[LANG].name}</h1>
          <h2 className="h2">{LOCALIZATION[LANG].specialization}</h2>
          <div className="home__about">{LOCALIZATION[LANG].aboutMe}</div>
        </div>
      </section>
      <div className="color__block" />
    </>
  );
};

export { Main };
