import { MouseEvent } from 'react';

export interface IPaths {
  main: string;
  about: string;
  portfolio: string;
  certificates: string;
  contacts: string;
  notFound: string;
}

export interface ICertificatesMock {
  id: string;
  src: string;
  srcSmall: string;
  alt: string;
  altRu: string;
  description: string;
  descriptionRu: string;
  link: string;
}

export interface IPortfolioMock {
  id: string;
  src: string;
  srcSmall: string;
  alt: string;
  altRu: string;
  description: string;
  descriptionRu: string;
  deploy: string;
  code: string;
  stack: string;
  requirements: string;
}

export interface ISkillsMock {
  id: string;
  src: string;
  alt: string;
  altRu: string;
  description: string;
  descriptionRu: string;
}

export interface ISocialsMock {
  id: string;
  src: string;
  alt: string;
  altRu: string;
  description: string;
  descriptionRu: string;
  link: string;
}

export interface IList {
  link?: string;
  src: string;
  srcSmall: string;
  alt: string;
  altRu: string;
  description: string;
  descriptionRu: string;
  deploy?: string;
  code?: string;
  key?: string;
  id?: string;
  isLanguageEn?: boolean;
  modalCreate?: (event: MouseEvent<HTMLButtonElement>) => void;
  stack?: string;
}

export interface IListProps {
  data: IList[];
  isLanguageEn: boolean;
}

export interface IImage {
  src: string;
  srcSmall: string;
  alt: string;
  className: string;
  Image?: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
  };
}

export interface ITitle {
  firstWord?: string;
  secondWord: string;
  bgWord?: string;
}

export interface IModal {
  modalData: IList;
}

export interface IButtonPrimary {
  className: string;
  ariaLabel: string;
  svg: string;
  onClick: () => void;
}

export interface IButtonNav {
  path: string;
  svg: string;
}
