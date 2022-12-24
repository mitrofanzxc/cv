import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IList } from '../../constants/interface';

export interface ModalState {
  value: boolean;
  data: IList;
}

const initialState: ModalState = {
  value: false,
  data: {
    src: '',
    srcSmall: '',
    alt: '',
    altRu: '',
    description: '',
    descriptionRu: '',
    deploy: '',
    code: '',
    link: '',
    stack: '',
  },
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
    addDataToModal: (state, action: PayloadAction<IList>) => {
      state.data = action.payload;
    },
  },
});

export const { setModalClose, setModalOpen, setModalByAmount, addDataToModal } = modalSlice.actions;
export default modalSlice.reducer;
