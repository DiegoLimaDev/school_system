import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../infra/useHttp/useHttp';
import { StudentDomain } from '../../domain/student.domain';

//estado que faz um get em todos os estudantes relacionados ao professor ativo a partir do seu id

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

export const getTeacherStudents = createAsyncThunk(
  'get/student',
  async (id: number) => {
    const url = `http://localhost:8000/student/${id}`;
    return await useHttp.get(url);
  },
);

const getTeacherStudentsSlice = createSlice({
  name: 'getTeacherStudents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeacherStudents.pending, (state) => {
      state.loading = true;
      state.entities = [];
    });
    builder.addCase(getTeacherStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getTeacherStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export default getTeacherStudentsSlice.reducer;
