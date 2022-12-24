import { FC, MouseEvent } from 'react';
import { useAppDispatch, setModalOpen, addDataToModal } from 'store';
import { useModalOpen } from 'hooks';
import { ListItem, Modal } from 'components';
import { IList, IListProps } from '../../constants/interface';
import './style.scss';

const List: FC<IListProps> = ({ data, isLanguageEn }) => {
  const dispatch = useAppDispatch();

  const modalCreate = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLButtonElement;
    const { id }: { id: string } = target;
    const findObject: IList | undefined = data.find((value) => value.id === id);

    if (findObject) {
      dispatch(addDataToModal(findObject));
      dispatch(setModalOpen());
    }
  };

  useModalOpen();

  return (
    <ul className="list">
      {data.map(({ src, srcSmall, alt, altRu, description, descriptionRu, link, id }) => {
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
      <Modal />
    </ul>
  );
};

export { List };
