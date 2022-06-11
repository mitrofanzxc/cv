import { FC, useState, useEffect, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { ILIST } from '../../shared/interface';
import { ILIST_PROPS } from '../../shared/interface';
import { ListItem } from './listItem/ListItem';
import { Modal } from '../modal/Modal';
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
    const currentTarget = event.currentTarget.id;

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

  const useModalOpen = () => {
    useEffect(() => {
      const BODY = document.querySelector('.body');
      if (isModalOpen) {
        BODY?.classList.add('body__overflow');
      } else {
        BODY?.classList.remove('body__overflow');
      }
    }, [isModalOpen]);
  };

  useModalOpen();

  return (
    <ul className="list">
      {list.map(({ src, srcSmall, alt, altRu, description, descriptionRu, link, id }) => {
        return (
          <ListItem
            src={src}
            srcSmall={srcSmall}
            alt={alt}
            altRu={altRu}
            description={description}
            descriptionRu={descriptionRu}
            link={link}
            key={id}
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
