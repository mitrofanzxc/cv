import { FC, useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { useModalOpen, setModalOpen } from '../../features';
import { ListItem, Modal } from '..';
import { PORTFOLIO_LIST, CERTIFICATES_LIST, PATHS } from '../../shared';
import { ILIST, ILIST_PROPS } from '../../shared/interface/interface';
import './List.scss';

const List: FC<ILIST_PROPS> = ({ list, isLanguageEn }) => {
  const [modalData, setModalData] = useState<ILIST>(PORTFOLIO_LIST[0]);
  const dispatch = useAppDispatch();

  const { portfolio, certificates } = PATHS;
  const LOCATION = useLocation().pathname;

  const modalCreate = (event: MouseEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget.id;

    let data;

    if (LOCATION === `/${portfolio}`) {
      data = PORTFOLIO_LIST;
    } else if (LOCATION === `/${certificates}`) {
      data = CERTIFICATES_LIST;
    }

    const findObject = data?.filter((element: ILIST) => element.id === currentTarget)[0];

    dispatch(setModalOpen());

    if (findObject) {
      setModalData(findObject);
    }
  };

  useModalOpen();

  return (
    <ul className="list">
      {list.map(({ src, srcSmall, alt, altRu, description, descriptionRu, link, id }) => {
        return (
          <ListItem
            key={id}
            src={src}
            srcSmall={srcSmall}
            alt={alt}
            altRu={altRu}
            description={description}
            descriptionRu={descriptionRu}
            link={link}
            id={id}
            isLanguageEn={isLanguageEn}
            modalCreate={modalCreate}
          />
        );
      })}
      <Modal modalData={modalData} />
    </ul>
  );
};

export { List };
