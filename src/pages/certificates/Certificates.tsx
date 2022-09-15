import { FC } from 'react';
import { useScrollToTop, useSwitchTheme } from '../../features';
import { useAppSelector } from '../../app/hooks';
import { Title, List } from '../../components';
import { LOCALIZATION, CERTIFICATES_LIST } from '../../shared';
import './Certificates.scss';

const Certificates: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  useScrollToTop();
  useSwitchTheme();

  return (
    <section className="certificates-page">
      <Title
        firstWord={isLanguageEn ? LOCALIZATION.en.myI : LOCALIZATION.ru.myI}
        secondWord={isLanguageEn ? LOCALIZATION.en.certificates : LOCALIZATION.ru.certificates}
        bgWord={isLanguageEn ? LOCALIZATION.en.awards : LOCALIZATION.ru.awards}
      />
      <List list={CERTIFICATES_LIST} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { Certificates };
