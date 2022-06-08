import { FC } from 'react';
import { TitleProps } from '../../shared/interface';

import './Title.scss';

const Title: FC<TitleProps> = ({ firstWord, secondWord, bgWord, theme }) => {
  return (
    <div className="title__wrapper">
      <h2 className="h2 title">
        {firstWord} <span>{secondWord}</span>
      </h2>
      <span className={`title-bg ${theme !== 'dark' ? 'title-bg-light' : ''}`}>{bgWord}</span>
    </div>
  );
};

export { Title };
