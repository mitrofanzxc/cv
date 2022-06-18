import { MouseEvent } from 'react';

export interface ISTATE {
  useScrollToTop: () => void;
  useSwitchTheme: () => void;
  language: string;
  theme: string;
  setLanguage?: () => void;
  setTheme?: () => void;
  isModalOpen?: boolean;
  handleIsModalOpen?: (data: boolean) => void;
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
  modalCreate?: (event: MouseEvent<HTMLLIElement>) => void;
  stack?: string;
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

export interface ITitle {
  firstWord: string;
  secondWord?: string;
  bgWord?: string;
  theme: string;
}

export interface IModal {
  useModalOpen: () => void;
  modalData: ILIST;
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  language: string;
}

export interface IButtonNavigation {
  onClick: () => void;
  className: string;
}
