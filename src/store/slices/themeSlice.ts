import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: getLocalStorage('theme') || false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeDark: (state) => {
      state.value = true;
    },
    setThemeLight: (state) => {
      state.value = false;
    },
    setThemeByAmount: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setThemeDark, setThemeLight, setThemeByAmount } = themeSlice.actions;
export default themeSlice.reducer;
