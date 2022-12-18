import { FC } from 'react';
import { useAppSelector } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Title, List } from 'components';
import { Localization, PortfolioMock } from '../../constants';
import './Portfolio.scss';

const Portfolio: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="portfolio-page">
      <Title
        firstWord={isLanguageEn ? Localization.en.myE : Localization.ru.myE}
        secondWord={isLanguageEn ? Localization.en.portfolio : Localization.ru.portfolio}
        bgWord={isLanguageEn ? Localization.en.works : Localization.ru.works}
      />
      <List list={PortfolioMock} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { Portfolio };
