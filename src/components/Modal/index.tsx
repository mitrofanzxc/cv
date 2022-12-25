import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch, setModalClose } from 'store';
import { useModalOpen } from 'hooks';
import { Image, ButtonPrimary } from 'components';
import { Localization, Paths } from '../../constants';
import './style.scss';

const Modal: FC = () => {
  const { portfolio, certificates } = Paths;
  const LOCATION = useLocation().pathname;

  const isLanguageEn = useAppSelector(({ language: { value } }) => value);
  const isModalOpen = useAppSelector(({ modal: { value } }) => value);
  const modalData = useAppSelector(({ modal: { data } }) => data);
  const dispatch = useAppDispatch();

  const { src, srcSmall, alt, altRu, description, descriptionRu, deploy, code, link, stack } =
    modalData;

  const handleModal = () => {
    dispatch(setModalClose());
  };

  useModalOpen();

  return (
    <>
      <button
        type="button"
        aria-label="Close modal"
        onClick={handleModal}
        className={`modal__shadow ${isModalOpen ? 'modal__shadow_active' : ''}`}
      />
      <div className={`modal ${isModalOpen ? 'modal_active' : ''}`}>
        <div className="modal__wrapper">
          <Image
            src={src}
            srcSmall={srcSmall}
            alt={isLanguageEn ? alt : altRu}
            className="modal__img box-shadow"
          />
          <div className="modal__info">
            <h3 className="h3">{isLanguageEn ? description : descriptionRu}</h3>
            <ul className="modal-list">
              {LOCATION === `/${portfolio}` && (
                <>
                  <li className="modal-list__item">
                    {`${isLanguageEn ? Localization.en.deploy : Localization.ru.deploy}: `}
                    <a
                      href={deploy}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal-list__link"
                    >
                      {isLanguageEn ? Localization.en.link : Localization.ru.link}
                    </a>
                  </li>
                  <li className="modal-list__item">
                    {`${isLanguageEn ? Localization.en.code : Localization.ru.code}: `}
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal-list__link"
                    >
                      {isLanguageEn ? Localization.en.link : Localization.ru.link}
                    </a>
                  </li>
                  <li className="modal-list__item">
                    {`${isLanguageEn ? Localization.en.stack : Localization.ru.stack}: `}
                    <span className="stack">{stack}</span>
                  </li>
                  <li className="modal-list__item">
                    {`${
                      isLanguageEn ? Localization.en.requirements : Localization.ru.requirements
                    }: `}
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal-list__link"
                    >
                      {isLanguageEn ? Localization.en.link : Localization.ru.link}
                    </a>
                  </li>
                </>
              )}

              {LOCATION === `/${certificates}` && (
                <li className="modal-list__item">
                  {`${
                    isLanguageEn ? Localization.en.electronicForm : Localization.ru.electronicForm
                  }: `}
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="modal-list__link"
                  >
                    {isLanguageEn ? Localization.en.link : Localization.ru.link}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* <ButtonPrimary
          className="button-primary button-primary__close"
          ariaLabel="Close"
          svg="close"
          onClick={handleModal}
        /> */}
      </div>
    </>
  );
};

export { Modal };