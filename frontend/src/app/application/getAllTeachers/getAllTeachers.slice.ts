import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TeacherDomain } from '../../domain/teacher.domain';
import { useHttp } from '../../infra/useHttp/useHttp';

type getAllTeachersType = {
  entities: TeacherDomain[];
  loading: boolean;
  error: string | undefined;
};

const initialState: getAllTeachersType = {
  entities: [],
  loading: false,
  error: '',
};

export const getAllTeachers = createAsyncThunk('get/AllTeachers', async () => {
  const url = 'http://localhost:8000/teachers';
  return await useHttp.get(url);
});

const getAllTeachersSlice = createSlice({
  name: 'getTeacher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTeachers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTeachers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllTeachers.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export default getAllTeachersSlice.reducer;
