import { FC, useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useModalOpen } from '../../features';
import { ILIST, ILIST_PROPS } from '../../shared/interface';
import { ListItem, Modal } from '..';
import { PORTFOLIO_LIST } from '../../shared/portfolio';
import { CERTIFICATES_LIST } from '../../shared/certificates';
import { PATHS } from '../../shared/routes';
import './List.scss';

const List: FC<ILIST_PROPS> = ({ list, language }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ILIST>(PORTFOLIO_LIST[0]);

  const { portfolio, certificates } = PATHS;
  const LOCATION = useLocation().pathname;

  const handleIsModalOpen = (data: boolean) => {
    setIsModalOpen(data);
  };

  const modalCreate = (event: MouseEvent<HTMLLIElement>) => {
    const currentTarget = event.currentTarget.id as string;

    let data;

    if (LOCATION === `/${portfolio}`) {
      data = PORTFOLIO_LIST;
    } else if (LOCATION === `/${certificates}`) {
      data = CERTIFICATES_LIST;
    }

    const findObject = data?.filter((element: ILIST) => element.id === currentTarget)[0];

    setIsModalOpen(true);

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
            language={language}
            modalCreate={modalCreate}
          />
        );
      })}
      <Modal
        useModalOpen={useModalOpen}
        isModalOpen={isModalOpen}
        modalData={modalData}
        handleIsModalOpen={handleIsModalOpen}
        language={language}
      />
    </ul>
  );
};

export { List };
