import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';
import { ILIST } from '../../../shared/interface';
import { LOCALIZATION } from '../../../shared/localization';

import './ListItem.scss';

const ListItem: FC<ILIST> = ({
  src,
  alt,
  altRu,
  description,
  descriptionRu,
  key,
  link,
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
            <img src={src} alt={language === 'en' ? alt : altRu} className="list-item__img" />
          </div>
          <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
        </li>
      )}
      {LOCATION === `/${certificates}` && (
        <li key={key} className="list-item__wrapper">
          <div className="list-item">
            <img src={src} alt={language === 'en' ? alt : altRu} className="list-item__img" />
          </div>
          <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
        </li>
      )}
      {LOCATION === `/${portfolio}` && (
        <li key={key} className="list-item__wrapper">
          <div className="list-item">
            <img src={src} alt={language === 'en' ? alt : altRu} className="list-item__img" />
            <div className="list-item-hover">
              <a href="" target="_blank" rel="noreferrer noopener" className="list-item-link">
                {LOCALIZATION[LANG].deploy}
              </a>
              <a href="" target="_blank" rel="noreferrer noopener" className="list-item-link">
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
            <img
              src={src}
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
