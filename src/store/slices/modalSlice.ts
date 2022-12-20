import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils';

export interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: getLocalStorage('modal') || false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalClose: (state) => {
      state.value = false;
    },
    setModalOpen: (state) => {
      state.value = true;
    },
    setModalByAmount: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setModalClose, setModalOpen, setModalByAmount } = modalSlice.actions;
export default modalSlice.reducer;
