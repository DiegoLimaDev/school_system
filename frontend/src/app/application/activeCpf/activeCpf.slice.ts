import { PayloadAction, createSlice } from '@reduxjs/toolkit';

//estado que controla o cpf do usuário que está logado

type activeCpf = {
  activeCpf: string;
};

const initialState: activeCpf = {
  activeCpf: '',
};

const activeCpfSlice = createSlice({
  name: 'activeCpf',
  initialState,
  reducers: {
    setActiveCpf: (state, action: PayloadAction<string>) => {
      state.activeCpf = action.payload;
    },
  },
});

export default activeCpfSlice.reducer;

export const { setActiveCpf } = activeCpfSlice.actions;
