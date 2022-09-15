import { FC } from 'react';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { useAppSelector } from '../../app/hooks';
import { LOCALIZATION } from '../../shared';
import './NotFound.scss';

const NotFound: FC = () => {
  const language = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section data-testid="NotFoundPage" className="notfound">
      <h1 className="h1">404</h1>
      <h2 className="h2">{language ? LOCALIZATION.en.notFound : LOCALIZATION.ru.notFound}</h2>
      <h3 className="h3">
        {language ? LOCALIZATION.en.resourseRequest : LOCALIZATION.ru.resourseRequest}
      </h3>
    </section>
  );
};

export { NotFound };
