import { FC } from 'react';
import { useAppSelector } from 'store';
import { ITitle } from '../../constants/interface';
import './style.scss';

const Title: FC<ITitle> = ({ firstWord, secondWord, bgWord }) => {
  const theme = useAppSelector(({ theme: { value } }) => value);

  return (
    <div className="title">
      <h2 className="h2 title__text">
        {firstWord || ''} <span>{secondWord}</span>
      </h2>
      {bgWord && <span className={`title__bg ${!theme ? 'title__bg_light' : ''}`}>{bgWord}</span>}
    </div>
  );
};

export { Title };
