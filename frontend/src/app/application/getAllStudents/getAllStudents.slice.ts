import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../infra/useHttp/useHttp';
import { StudentDomain } from '../../domain/student.domain';

//estado que faz um get na api que retorna todos estudantes

type getStudentType = {
  entities: StudentDomain[];
  loading: boolean;
  error: string | undefined;
};

const initialState: getStudentType = {
  entities: [],
  loading: false,
  error: '',
};

export const getAllStudents = createAsyncThunk('get/student', async () => {
  const url = `http://localhost:8000/student`;
  return await useHttp.get(url);
});

const getAllStudentsSlice = createSlice({
  name: 'getAllStudents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export default getAllStudentsSlice.reducer;
