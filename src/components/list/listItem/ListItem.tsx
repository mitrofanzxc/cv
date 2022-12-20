import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Image } from 'components';
import { Paths } from '../../../constants';
import { IList } from '../../../constants/interface';
import './ListItem.scss';

const ListItem: FC<IList> = ({
  src,
  srcSmall,
  alt,
  altRu,
  description,
  descriptionRu,
  link,
  id,
  isLanguageEn,
  modalCreate,
}) => {
  const { about, portfolio, certificates, contacts } = Paths;
  const LOCATION = useLocation().pathname;

  return (
    <>
      {LOCATION === `/${about}` && (
        <li className="list-item__wrapper">
          <div className="list-item">
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={isLanguageEn ? alt : altRu}
              className="list__img"
            />
          </div>
          <h3 className="h3">{isLanguageEn ? description : descriptionRu}</h3>
        </li>
      )}

      {LOCATION === `/${certificates}` && (
        <button type="button" id={id} className="list-item__wrapper" onClick={modalCreate}>
          <div className="list-item">
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={isLanguageEn ? alt : altRu}
              className="list__img"
            />
          </div>
          <h3 className="h3">{isLanguageEn ? description : descriptionRu}</h3>
        </button>
      )}

      {LOCATION === `/${portfolio}` && (
        <button type="button" id={id} className="list-item__wrapper" onClick={modalCreate}>
          <div className="list-item">
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={isLanguageEn ? alt : altRu}
              className="list__img"
            />
          </div>
          <h3 className="h3">{isLanguageEn ? description : descriptionRu}</h3>
        </button>
      )}

      {LOCATION === `/${contacts}` && (
        <li className="list-item__wrapper social-item__wrapper">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="list-item social-item"
          >
            <Image
              src={src}
              srcSmall={srcSmall}
              alt={isLanguageEn ? alt : altRu}
              className="list__img social-item__img"
            />
          </a>
          <h3 className="h3">{isLanguageEn ? description : descriptionRu}</h3>
        </li>
      )}
    </>
  );
};

export { ListItem };
