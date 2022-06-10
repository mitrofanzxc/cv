import { ReactElement } from 'react';

export interface ISTATE {
  useScrollToTop: () => void;
  useSwitchTheme: () => void;
  language: string;
  theme: string;
  setLanguage?: () => void;
  setTheme?: () => void;
}

export interface IPATHS {
  main: string;
  about: string;
  portfolio: string;
  certificates: string;
  contacts: string;
  notFound: string;
}

export interface ILIST {
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
  language?: string;
}

export interface ILIST_PROPS {
  list: ILIST[];
  language: string;
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

export interface PreloaderSuspenseProps {
  children: ReactElement;
}

export interface ErrorProps {
  errorMsg: string;
}

export interface ModalProps {
  activeModal: boolean;
  setActiveModal: (active: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

export interface TitleProps {
  firstWord: string;
  secondWord?: string;
  bgWord: string;
  theme: string;
}
