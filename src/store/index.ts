import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import { setThemeDark, setThemeLight, setThemeByAmount } from './slices/themeSlice';
import { setModalClose, setModalOpen, setModalByAmount, addDataToModal } from './slices/modalSlice';
import { setLanguageEn, setLanguageRu, setLanguageByAmount } from './slices/languageSlice';

export {
  store,
  useAppSelector,
  useAppDispatch,
  setThemeDark,
  setThemeLight,
  setThemeByAmount,
  setModalClose,
  setModalOpen,
  setModalByAmount,
  addDataToModal,
  setLanguageEn,
  setLanguageRu,
  setLanguageByAmount,
};
