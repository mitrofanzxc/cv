import { FC } from 'react';
import { IModal } from '../../shared/interface';
import { Image } from '../image/Image';
import { LOCALIZATION } from '../../shared/localization';

import './Modal.scss';

const Modal: FC<IModal> = ({
  useModalOpen,
  modalData,
  isModalOpen,
  handleIsModalOpen,
  language,
}) => {
  const { src, srcSmall, alt, altRu, description, descriptionRu, deploy, code } = modalData;
  const LANG = language as keyof typeof LOCALIZATION;

  const modalEventHandler = () => {
    handleIsModalOpen(true);
  };

  useModalOpen();

  return (
    <>
      <div
        onClick={modalEventHandler}
        className={`modal__shadow ${isModalOpen ? 'modal__shadow__active' : ''}`}
      />
      <div className={`modal ${isModalOpen ? 'modal__active' : ''}`}>
        <div className="modal__container">
          <Image
            src={src}
            srcSmall={srcSmall}
            alt={language === 'en' ? alt : altRu}
            className="modal__img"
          />
          <div className="modal__container__info">
            <h4 className="modal__name">{language === 'en' ? description : descriptionRu}</h4>
            <div className="modal__type__breed"></div>
            <div className="modal__description"></div>
            <ul className="modal__list">
              <li className="modal__list__item">
                {`${LOCALIZATION[LANG].deploy}: `}
                <a
                  href={deploy}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="modal__list__item__span modal__age"
                >
                  {LOCALIZATION[LANG].link}
                </a>
              </li>
              <li className="modal__list__item">
                {`${LOCALIZATION[LANG].code}: `}
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="modal__list__item__span modal__inoculations"
                >
                  {LOCALIZATION[LANG].link}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button onClick={modalEventHandler} className="button__pagination close" />
      </div>
    </>
  );
};

export { Modal };
