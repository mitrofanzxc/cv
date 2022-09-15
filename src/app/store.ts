import { configureStore } from '@reduxjs/toolkit';
import { themeReducer, languageReducer, modalReducer } from '../features';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
