import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IButtonNav } from '../../../constants/interface';
import Sprite from '../../../assets/images/icons/sprite.svg';

const ButtonNav: FC<IButtonNav> = ({ path, svg }) => {
  return (
    <NavLink to={path} end className="nav-list__link box-shadow">
      <svg className="nav-list__img">
        <use xlinkHref={`${Sprite}#${svg}`} />
      </svg>
    </NavLink>
  );
};

export { ButtonNav };
