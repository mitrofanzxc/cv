import { FC } from 'react';
import { IButtonNavigation } from '../../../shared/interface';

import './ButtonNavigation.scss';

const ButtonNavigation: FC<IButtonNavigation> = ({ onClick, className }) => {
  return <button onClick={onClick} className={className} />;
};

export { ButtonNavigation };
