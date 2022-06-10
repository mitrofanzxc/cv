import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';
import { ILIST } from '../../../shared/interface';
import { LOCALIZATION } from '../../../shared/localization';
import { Image } from '../../image/Image';

import './ListItem.scss';

const ListItem: FC<ILIST> = ({
  src,
  srcSmall,
  alt,
  altRu,
  description,
  descriptionRu,
  link,
  deploy,
  code,
  key,
  language,
}) => {
  const { about, portfolio, certificates, contacts } = PATHS;
  const LANG = language as keyof typeof LOCALIZATION;
  const LOCATION = useLocation().pathname;

  return (
    <>
      {LOCATION === `/${about}` && (
        <li key={key} className="list-item__wrapper">
          <div className="list-item">
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={language === 'en' ? alt : altRu}
              className="list-item__img"
            />
          </div>
          <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
        </li>
      )}
      {LOCATION === `/${certificates}` && (
        <li key={key} className="list-item__wrapper">
          <div className="list-item">
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={language === 'en' ? alt : altRu}
              className="list-item__img"
            />
            <div className="list-item-hover">
              <a href={link} target="_blank" rel="noreferrer noopener" className="list-item-link">
                {LOCALIZATION[LANG].link}
              </a>
            </div>
          </div>
          <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
        </li>
      )}
      {LOCATION === `/${portfolio}` && (
        <li key={key} className="list-item__wrapper">
          <div className="list-item">
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={language === 'en' ? alt : altRu}
              className="list-item__img"
            />
            <div className="list-item-hover">
              <a href={deploy} target="_blank" rel="noreferrer noopener" className="list-item-link">
                {LOCALIZATION[LANG].deploy}
              </a>
              <a href={code} target="_blank" rel="noreferrer noopener" className="list-item-link">
                {LOCALIZATION[LANG].code}
              </a>
            </div>
          </div>
          <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
        </li>
      )}
      {LOCATION === `/${contacts}` && (
        <li key={key} className="list-item__wrapper social-item__wrapper">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="list-item social-item"
          >
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={language === 'en' ? alt : altRu}
              className="list-item__img social-item__img"
            />
          </a>
          <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
        </li>
      )}
    </>
  );
};

export { ListItem };
