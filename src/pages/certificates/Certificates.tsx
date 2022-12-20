import { FC } from 'react';
import { useAppSelector } from 'store';
import { Title, List } from 'components';
import { Localization, CertificatesMock } from '../../constants';
import './Certificates.scss';

const Certificates: FC = () => {
  const isLanguageEn = useAppSelector(({ language: { value } }) => value);

  return (
    <section className="certificates-page">
      <Title
        firstWord={isLanguageEn ? Localization.en.myI : Localization.ru.myI}
        secondWord={isLanguageEn ? Localization.en.certificates : Localization.ru.certificates}
        bgWord={isLanguageEn ? Localization.en.awards : Localization.ru.awards}
      />
      <List list={CertificatesMock} isLanguageEn={isLanguageEn} />
    </section>
  );
};

export { Certificates };
