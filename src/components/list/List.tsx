import { FC, useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, setModalOpen } from 'store';
import { useModalOpen } from 'hooks';
import { ListItem, Modal } from 'components';
import { PortfolioMock, CertificatesMock, Paths } from '../../constants';
import { IList, IListProps } from '../../constants/interface';
import './List.scss';

const List: FC<IListProps> = ({ list, isLanguageEn }) => {
  const [data, setData] = useState<IList[] | null>(null);
  const [modalData, setModalData] = useState<IList>(PortfolioMock[0]);
  const dispatch = useAppDispatch();

  const { portfolio, certificates } = Paths;
  const LOCATION = useLocation().pathname;

  const modalCreate = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const { id }: { id: string } = target;

    switch (LOCATION) {
      case `/${portfolio}`:
        setData(PortfolioMock);
        break;
      case `/${certificates}`:
        setData(CertificatesMock);
        break;
      default:
        break;
    }

    if (data) {
      const findObject = data.filter((el) => el.id === id)[0];

      if (findObject) {
        setModalData(findObject);
      }

      dispatch(setModalOpen());
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
