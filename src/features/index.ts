import { useScrollToTop } from './useScrollToTop/useScrollToTop';
import { useSwitchTheme } from './useSwitchTheme/useSwitchTheme';
import { useModalOpen } from './useModalOpen/useModalOpen';
import { setThemeDark, setThemeLight, setThemeByAmount } from './setTheme/setTheme';
import themeReducer from './setTheme/setTheme';
import { setLanguageEn, setLanguageRu, setLanguageByAmount } from './setLanguage/setLanguage';
import languageReducer from './setLanguage/setLanguage';
import { setModalClose, setModalOpen, setModalByAmount } from './setModal/setModal';
import modalReducer from './setModal/setModal';

export {
  useScrollToTop,
  useSwitchTheme,
  useModalOpen,
  setThemeDark,
  setThemeLight,
  setThemeByAmount,
  themeReducer,
  setLanguageEn,
  setLanguageRu,
  setLanguageByAmount,
  languageReducer,
  setModalClose,
  setModalOpen,
  setModalByAmount,
  modalReducer,
};
