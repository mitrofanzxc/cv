import { FC } from 'react';
import { ILIST_PROPS } from '../../shared/interface';

import { ListItem } from './listItem/ListItem';

import './List.scss';

const List: FC<ILIST_PROPS> = ({ list, language }) => {
  return (
    <ul className="list">
      {list.map(
        ({ src, srcSmall, alt, altRu, description, descriptionRu, link, deploy, code, id }) => {
          return (
            <ListItem
              src={src}
              srcSmall={srcSmall}
              alt={alt}
              altRu={altRu}
              description={description}
              descriptionRu={descriptionRu}
              link={link}
              deploy={deploy}
              code={code}
              key={id}
              language={language}
            />
          );
        }
      )}
    </ul>
  );
};

export { List };
