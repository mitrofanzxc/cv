import { FC } from 'react';
import { useAppSelector } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Localization } from '../../constants';
import './style.scss';

const NotFound: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section data-testid="NotFoundPage" className="not-found">
      <h1 className="h1">404</h1>
      <h2 className="h2">{isLanguageEn ? Localization.en.notFound : Localization.ru.notFound}</h2>
      <h3 className="h3">
        {isLanguageEn ? Localization.en.resourseRequest : Localization.ru.resourseRequest}
      </h3>
    </section>
  );
};

export { NotFound };
