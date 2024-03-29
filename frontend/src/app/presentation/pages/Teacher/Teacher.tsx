import { Box, Typography } from '@mui/material';
import RegisterStudent from '../../components/RegisterStudent/RegisterStudent';
import { useAppDispatch, useAppSelector } from '../../../application/hooks';
import { useEffect, useState } from 'react';
import { theme } from '../../../../styles/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import EditStudentDialog from '../../components/EditStudentDialog/EditStudentDialog';
import { getTeacherStudents } from '../../../application/getTeacherStudents/getTeacherStudents.slice';
import LeaveButton from '../../components/LeaveButton/LeaveButton';
import { useHttp } from '../../../infra/useHttp/useHttp';

const TeacherPage = () => {
  const dispatch = useAppDispatch();
  const { teacher } = useAppSelector((state) => state.getTeacherReducer);
  const { entities } = useAppSelector(
    (state) => state.getTeacherStudentsReducer,
  );

  //estado que controle a visibilidade do modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //estado que controla e passa ao modal de edição o id do estudante
  const [idStudent, setIdStudent] = useState<number>(0);

  //função para disparo assíncrono dos gets
  const getDataDispatch = async () => {
    dispatch(getTeacherStudents(teacher!.id));
  };

  useEffect(() => {
    getDataDispatch();
  }, []);

  const deleteStudent = (id: number) => {
    const url = `http://localhost:8000/student/delete/${id}`;
    useHttp.delete(url).then(() => window.location.reload);
  };

  return (
    <>
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
      </Box>
      <RegisterStudent editOrCreate={'Criar aluno'} />
      <Box
        display={'flex'}
        m={'5rem auto 0 auto'}
        width={'fit-content'}
        flexDirection={'column'}
      >
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
                <Box>
                  <Icon
                    icon={'carbon:edit'}
                    height={15}
                    cursor={'pointer'}
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setIdStudent(student.id);
                    }}
                  />
                  <Icon
                    icon={'material-symbols-light:delete-outline'}
                    height={15}
                    cursor={'pointer'}
                    onClick={() => deleteStudent(student.id)}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <LeaveButton>Sair</LeaveButton>
      <EditStudentDialog
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        id={idStudent}
      />
    </>
  );
};

export default TeacherPage;
