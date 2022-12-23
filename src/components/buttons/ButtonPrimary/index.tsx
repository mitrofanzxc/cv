import { FC } from 'react';
import { IButtonPrimary } from '../../../constants/interface';
import Sprite from '../../../assets/images/icons/sprite.svg';
import './style.scss';

const ButtonPrimary: FC<IButtonPrimary> = ({ className, ariaLabel, svg, onClick }) => {
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} className={className}>
      <svg className="button-primary__img">
        <use xlinkHref={`${Sprite}#${svg}`} />
      </svg>
    </button>
  );
};

export { ButtonPrimary };
