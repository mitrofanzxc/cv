import { FC } from 'react';
import { IButtonNavigation } from '../../../constants/interface';
import './ButtonNavigation.scss';

const ButtonNavigation: FC<IButtonNavigation> = ({ onClick, className }) => {
  return (
    <button type="button" aria-label="Button navigation" onClick={onClick} className={className} />
  );
};

export { ButtonNavigation };
