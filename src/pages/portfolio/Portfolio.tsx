import { FC } from 'react';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { useAppSelector } from '../../app/hooks';
import { Title, List } from '../../components';
import { LOCALIZATION, PORTFOLIO_LIST } from '../../shared';
import './Portfolio.scss';

const Portfolio: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="portfolio-page">
      <Title
        firstWord={isLanguageEn ? LOCALIZATION.en.myE : LOCALIZATION.ru.myE}
        secondWord={isLanguageEn ? LOCALIZATION.en.portfolio : LOCALIZATION.ru.portfolio}
        bgWord={isLanguageEn ? LOCALIZATION.en.works : LOCALIZATION.ru.works}
      />
      <List list={PORTFOLIO_LIST} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { Portfolio };
