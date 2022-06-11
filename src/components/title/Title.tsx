import { FC } from 'react';
import { ITitle } from '../../shared/interface';

import './Title.scss';

const Title: FC<ITitle> = ({ firstWord, secondWord, bgWord, theme }) => {
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
