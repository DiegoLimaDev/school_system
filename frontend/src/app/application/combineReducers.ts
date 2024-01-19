import { combineReducers } from '@reduxjs/toolkit';
import activeCpfReducer from './activeCpf/activeCpf.slice';
import getTeacherReducer from './getTeacher/getTeacher.slice';
import getSchoolsReducer from './getSchools/getSchools.slice';
import getAllStudentsReducer from './getAllStudents/getAllStudents.slice';
import getTeacherStudentsReducer from './getTeacherStudents/getTeacherStudents.slice';
import getAllTeachersReducer from './getAllTeachers/getAllTeachers.slice';

//exporta a combinação de todos reducers para o store
export const rootReducer = combineReducers({
  activeCpfReducer,
  getTeacherReducer,
  getSchoolsReducer,
  getAllStudentsReducer,
  getTeacherStudentsReducer,
  getAllTeachersReducer,
});
