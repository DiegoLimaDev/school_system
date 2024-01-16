import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SchoolDomain } from '../../domain/school.domain';
import { useHttp } from '../../infra/useHttp/useHttp';

//estado que faz um get em todas as escolas

type getSchoolType = {
  entities: SchoolDomain[];
  loading: boolean;
  error: string | undefined;
};

const initialState: getSchoolType = {
  entities: [],
  loading: false,
  error: '',
};

export const getSchools = createAsyncThunk('get/teacher', async () => {
  const url = 'http://localhost:8000/school';
  return await useHttp.get(url);
});

const getSchoolsSLice = createSlice({
  name: 'getTeacher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSchools.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSchools.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getSchools.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export default getSchoolsSLice.reducer;
