import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TeacherDomain } from '../../domain/teacher.domain';
import { useHttp } from '../../infra/useHttp/useHttp';

//estado que faz um get no professor a partir do cpf ativo

type getTeacherType = {
  teacher: TeacherDomain | null;
  loading: boolean;
  error: string | undefined;
};

const initialState: getTeacherType = {
  teacher: null,
  loading: false,
  error: '',
};

export const getTeacher = createAsyncThunk(
  'get/teacher',
  async (cpf: string) => {
    const url = `http://localhost:8000/teachers/${cpf}`;
    return await useHttp.get(url);
  },
);

const getTeacherSlice = createSlice({
  name: 'getTeacher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeacher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTeacher.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getTeacher.fulfilled, (state, action) => {
      state.loading = false;
      state.teacher = action.payload;
    });
  },
});

export default getTeacherSlice.reducer;
