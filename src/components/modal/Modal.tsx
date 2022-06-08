import { FC } from 'react';
import { ModalProps } from '../../shared/interface';

import './Modal.scss';

const Modal: FC<ModalProps> = (props) => {
  return (
    <div
      className={props.activeModal ? 'modal active' : 'modal'}
      data-testid="modal"
      onClick={() => {
        props.setActiveModal(false);
      }}
    >
      <div
        className={props.activeModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
        <div
          role="button"
          className="modal__close"
          onClick={() => {
            props.setActiveModal(false);
          }}
        >
          &#128939;
        </div>
      </div>
    </div>
  );
};

export { Modal };
