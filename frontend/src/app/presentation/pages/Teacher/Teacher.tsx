import { Box, Typography } from '@mui/material';
import RegisterStudent from '../../components/RegisterStudent/RegisterStudent';
import { useAppDispatch, useAppSelector } from '../../../application/hooks';
import { getTeacher } from '../../../application/getTeacher/getTeacher.slice';
import { useEffect, useState } from 'react';
import { theme } from '../../../../styles/theme';
import { getAllStudents } from '../../../application/getAllStudents/getAllStudents.slice';
import { Icon } from '@iconify/react/dist/iconify.js';
import EditStudentDialog from '../../components/EditStudentDialog/EditStudentDialog';
import { getTeacherStudents } from '../../../application/getTeacherStudents/getTeacherStudents.slice';

const TeacherPage = () => {
  const dispatch = useAppDispatch();
  const { teacher } = useAppSelector((state) => state.getTeacherReducer);
  const { activeCpf } = useAppSelector((state) => state.activeCpfReducer);
  const { entities, loading } = useAppSelector(
    (state) => state.getTeacherStudentsReducer,
  );

  //estado que controle a visibilidade do modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //estado que controla e passa ao modal de edição o id do estudante
  const [idStudent, setIdStudent] = useState<number>(0);

  //função para disparo assíncrono dos gets
  const getDataDispatch = async () => {
    await dispatch(getTeacher(activeCpf));
    await dispatch(getAllStudents());
    await dispatch(getTeacherStudents(teacher!.id));
  };

  useEffect(() => {
    getDataDispatch();
  }, []);

  return (
    <Box>
      <Box
        display={'flex'}
        m={'5rem auto 0 auto'}
        width={'fit-content'}
        flexDirection={'column'}
      >
        <Typography fontSize={theme.sizes.medium} textAlign={'left'}>
          Professor
        </Typography>
        <Typography fontSize={theme.sizes.medium}>{teacher?.name}</Typography>
        <Typography
          fontSize={theme.sizes.medium}
        >{`${teacher?.cpf.substring(0, 3)}.***.***-${teacher?.cpf.substring(9, 11)}`}</Typography>
      </Box>
      <RegisterStudent editOrCreate={'Criar aluno'} />
      <Box
        display={'flex'}
        m={'5rem auto 0 auto'}
        width={'fit-content'}
        flexDirection={'column'}
      >
        {loading ? (
          <p>carregando estudantes</p>
        ) : (
          <Box>
            <Typography fontSize={theme.sizes.medium} textAlign={'center'}>
              Lista de estudantes
            </Typography>
            {entities.map((student) => {
              return (
                <Box
                  key={student.id}
                  border={'0.1rem solid'}
                  borderRadius={'0.5rem'}
                  my={'1rem'}
                  p={'1rem'}
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Typography fontSize={theme.sizes.small}>
                    {student.name}
                  </Typography>
                  <Icon
                    icon={'carbon:edit'}
                    height={15}
                    cursor={'pointer'}
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setIdStudent(student.id);
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
      <EditStudentDialog
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        id={idStudent}
      />
    </Box>
  );
};

export default TeacherPage;
