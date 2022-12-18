import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch, setModalClose } from 'store';
import { useModalOpen } from 'hooks';
import { Image, ButtonNavigation } from 'components';
import { Localization, Paths } from '../../constants';
import { IModal } from '../../constants/interface';
import './Modal.scss';

const Modal: FC<IModal> = ({ modalData }) => {
  const { src, srcSmall, alt, altRu, description, descriptionRu, deploy, code, link, stack } =
    modalData;
  const { portfolio, certificates } = Paths;
  const LOCATION = useLocation().pathname;

  const isLanguageEn = useAppSelector(({ language: { value } }) => value);
  const isModalOpen = useAppSelector(({ modal: { value } }) => value);
  const dispatch = useAppDispatch();

  useModalOpen();

  return (
    <>
      <button
        type="button"
        aria-label="Close modal"
        onClick={() => dispatch(setModalClose())}
        className={`modal__shadow ${isModalOpen ? 'modal__shadow-active' : ''}`}
      />
      <div className={`modal ${isModalOpen ? 'modal-active' : ''}`}>
        <div className="modal__container">
          <Image
            src={src}
            srcSmall={srcSmall}
            alt={isLanguageEn ? alt : altRu}
            className="modal__img"
          />
          <div className="modal__info">
            <h3 className="h3">{isLanguageEn ? description : descriptionRu}</h3>
            <ul className="modal__list">
              {LOCATION === `/${portfolio}` && (
                <>
                  <li className="modal__list-item">
                    {`${isLanguageEn ? Localization.en.deploy : Localization.ru.deploy}: `}
                    <a
                      href={deploy}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal__list-item-span"
                    >
                      {isLanguageEn ? Localization.en.link : Localization.ru.link}
                    </a>
                  </li>
                  <li className="modal__list-item">
                    {`${isLanguageEn ? Localization.en.code : Localization.ru.code}: `}
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal__list-item-span"
                    >
                      {isLanguageEn ? Localization.en.link : Localization.ru.link}
                    </a>
                  </li>
                  <li className="modal__list-item">
                    {`${isLanguageEn ? Localization.en.stack : Localization.ru.stack}: `}
                    <span className="stack">{stack}</span>
                  </li>
                </>
              )}

              {LOCATION === `/${certificates}` && (
                <li className="modal__list-item">
                  {`${
                    isLanguageEn ? Localization.en.electronicForm : Localization.ru.electronicForm
                  }: `}
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="modal__list-item-span"
                  >
                    {isLanguageEn ? Localization.en.link : Localization.ru.link}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <ButtonNavigation
          onClick={() => dispatch(setModalClose())}
          className="button-navigation button-navigation__close"
        />
      </div>
    </>
  );
};

export { Modal };
