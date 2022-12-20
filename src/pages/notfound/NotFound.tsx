import { FC } from 'react';
import { useAppSelector } from 'store';
import { Localization } from '../../constants';
import './NotFound.scss';

const NotFound: FC = () => {
  const language = useAppSelector(({ language: { value } }) => value);

  return (
    <section data-testid="NotFoundPage" className="notfound">
      <h1 className="h1">404</h1>
      <h2 className="h2">{language ? Localization.en.notFound : Localization.ru.notFound}</h2>
      <h3 className="h3">
        {language ? Localization.en.resourseRequest : Localization.ru.resourseRequest}
      </h3>
    </section>
  );
};

export { NotFound };
