import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';
import { ILIST } from '../../../shared/interface';

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
  const LOCATION = useLocation().pathname;
  const { contacts } = PATHS;

  return LOCATION !== `/${contacts}` ? (
    <li key={key} className="list-item__wrapper">
      <div className="list-item">
        <img src={src} alt={language === 'en' ? alt : altRu} className="list-item__img" />
      </div>
      <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
    </li>
  ) : (
    <li key={key} className="list-item__wrapper social-item__wrapper">
      <a href={link} target="_blank" rel="noreferrer noopener" className="list-item social-item">
        <img
          src={src}
          alt={language === 'en' ? alt : altRu}
          className="list-item__img social-item__img"
        />
      </a>
      <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
    </li>
  );
};

export { ListItem };
