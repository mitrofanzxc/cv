import { FC } from 'react';
import { IModal } from '../../shared/interface';
import { Image } from '../image/Image';
import { LOCALIZATION } from '../../shared/localization';
import { ButtonNavigation } from '../buttons';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../shared/routes';

import './Modal.scss';

const Modal: FC<IModal> = ({
  useModalOpen,
  modalData,
  isModalOpen,
  handleIsModalOpen,
  language,
}) => {
  const { src, srcSmall, alt, altRu, description, descriptionRu, deploy, code, link, stack } =
    modalData;
  const LANG = language as keyof typeof LOCALIZATION;
  const LOCATION = useLocation().pathname;
  const { portfolio, certificates } = PATHS;

  const modalEventHandler = () => {
    handleIsModalOpen(false);
  };

  useModalOpen();

  return (
    <>
      <div
        onClick={modalEventHandler}
        className={`modal__shadow ${isModalOpen ? 'modal__shadow-active' : ''}`}
      />
      <div className={`modal ${isModalOpen ? 'modal-active' : ''}`}>
        <div className="modal__container">
          <Image
            src={src}
            srcSmall={srcSmall}
            alt={language === 'en' ? alt : altRu}
            className="modal__img"
          />
          <div className="modal__info">
            <h3 className="h3">{language === 'en' ? description : descriptionRu}</h3>
            <ul className="modal__list">
              {LOCATION === `/${portfolio}` && (
                <>
                  <li className="modal__list-item">
                    {`${LOCALIZATION[LANG].deploy}: `}
                    <a
                      href={deploy}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal__list-item-span"
                    >
                      {LOCALIZATION[LANG].link}
                    </a>
                  </li>
                  <li className="modal__list-item">
                    {`${LOCALIZATION[LANG].code}: `}
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal__list-item-span"
                    >
                      {LOCALIZATION[LANG].link}
                    </a>
                  </li>
                  <li className="modal__list-item">
                    {`${LOCALIZATION[LANG].stack}: `}
                    <span className="stack">{stack}</span>
                  </li>
                </>
              )}
              {LOCATION === `/${certificates}` && (
                <li className="modal__list-item">
                  {`${LOCALIZATION[LANG].electronicForm}: `}
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="modal__list-item-span"
                  >
                    {LOCALIZATION[LANG].link}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <ButtonNavigation
          onClick={modalEventHandler}
          className="button-navigation button-navigation__close"
        />
      </div>
    </>
  );
};

export { Modal };
