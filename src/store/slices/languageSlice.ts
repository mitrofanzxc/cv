import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';

export interface LanguageState {
  value: boolean;
}

const initialState: LanguageState = {
  value: getLocalStorage('language') || true,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguageEn: (state) => {
      state.value = true;
    },
    setLanguageRu: (state) => {
      state.value = false;
    },
    setLanguageByAmount: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguageEn, setLanguageRu, setLanguageByAmount } = languageSlice.actions;
export default languageSlice.reducer;
