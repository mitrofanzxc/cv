import { FC } from 'react';
import { ILIST_PROPS } from '../../shared/interface';

import { ListItem } from './listItem/ListItem';

import './List.scss';

const List: FC<ILIST_PROPS> = ({ list, language }) => {
  return (
    <ul className="list">
      {list.map(({ src, alt, altRu, description, descriptionRu, id, link }) => {
        return (
          <ListItem
            src={src}
            alt={alt}
            altRu={altRu}
            description={description}
            descriptionRu={descriptionRu}
            key={id}
            link={link}
            language={language}
          />
        );
      })}
    </ul>
  );
};

export { List };
