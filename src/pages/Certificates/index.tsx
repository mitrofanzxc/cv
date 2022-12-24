import { FC } from 'react';
import { useAppSelector } from 'store';
import { useScrollToTop, useSwitchTheme } from 'hooks';
import { Title, List } from 'components';
import { Localization, CertificatesMock } from '../../constants';
import './style.scss';

const Certificates: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="certificates-page">
      <Title
        firstWord={isLanguageEn ? Localization.en.myI : Localization.ru.myI}
        secondWord={isLanguageEn ? Localization.en.certificates : Localization.ru.certificates}
        bgWord={isLanguageEn ? Localization.en.awards : Localization.ru.awards}
      />
      <List data={CertificatesMock} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { Certificates };
