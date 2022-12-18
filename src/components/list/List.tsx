import { FC, useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, setModalOpen } from 'store';
import { useModalOpen } from 'hooks';
import { PortfolioMock, CertificatesMock, Paths } from '../../constants';
import { ListItem, Modal } from '..';
import { ILIST, ILIST_PROPS } from '../../constants/interface';
import './List.scss';

const List: FC<ILIST_PROPS> = ({ list, isLanguageEn }) => {
  const [modalData, setModalData] = useState<ILIST>(PortfolioMock[0]);
  const dispatch = useAppDispatch();

  const { portfolio, certificates } = Paths;
  const LOCATION = useLocation().pathname;

  const modalCreate = (event: MouseEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget.id;

    let data;

    if (LOCATION === `/${portfolio}`) {
      data = PortfolioMock;
    } else if (LOCATION === `/${certificates}`) {
      data = CertificatesMock;
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
