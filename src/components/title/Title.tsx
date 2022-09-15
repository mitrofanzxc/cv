import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { ITitle } from '../../shared/interface';
import './Title.scss';

const Title: FC<ITitle> = ({ firstWord, secondWord, bgWord }) => {
  const theme = useAppSelector(({ theme: { value } }) => value);

  return (
    <div className="title__wrapper">
      <h2 className="h2 title">
        {firstWord} <span>{secondWord}</span>
      </h2>
      <span className={`title-bg ${!theme ? 'title-bg-light' : ''}`}>{bgWord}</span>
    </div>
  );
};

export { Title };
