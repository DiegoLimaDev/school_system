import { Box, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import RegisterTeacher from '../../components/RegisterTeacher/RegisterTeacher';
import LeaveButton from '../../components/LeaveButton/LeaveButton';
import RegisterSchool from '../../components/RegisterSchool/RegisterSchool';
import { useAppDispatch, useAppSelector } from '../../../application/hooks';
import { useEffect, useState } from 'react';
import { getAllTeachers } from '../../../application/getAllTeachers/getAllTeachers.slice';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useHttp } from '../../../infra/useHttp/useHttp';
import EditTeacherDialog from '../../components/EditentTeacherDialog/EditTeacherDialog';

const AdminPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [idTeacher, setIdTeacher] = useState<number>(0);
  const [cpfTeacher, setCpfTeacher] = useState<string>('');
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.getAllTeachersReducer);

  const dispatchGetAllTeachers = async () => {
    return await dispatch(getAllTeachers());
  };

  useEffect(() => {
    dispatchGetAllTeachers();
  }, []);

  const deleteTeacher = async (id: number) => {
    const url = `http://localhost:8000/teachers/delete/${id}`;
    await useHttp
      .delete(url)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box>
        <Box
          display={'flex'}
          m={'5rem auto 0 auto'}
          width={'fit-content'}
          flexDirection={'column'}
        >
          <Typography fontSize={theme.sizes.medium} textAlign={'left'}>
            Admin
          </Typography>
        </Box>
      </Box>
      <RegisterSchool />
      <RegisterTeacher editOrCreate="Criar professor" />
      <Box
        display={'flex'}
        m={'5rem auto 0 auto'}
        width={'fit-content'}
        flexDirection={'column'}
      >
        {entities.length ? (
          <Box>
            <Typography fontSize={theme.sizes.medium} textAlign={'center'}>
              Lista de professores
            </Typography>
            {entities.map((teacher) => {
              return (
                <Box
                  key={teacher.id}
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
                    {teacher.name}
                  </Typography>
                  <Box>
                    <Icon
                      icon={'carbon:edit'}
                      height={15}
                      cursor={'pointer'}
                      onClick={() => {
                        setIsDialogOpen(!isDialogOpen);
                        setIdTeacher(teacher.id);
                        setCpfTeacher(teacher.cpf);
                      }}
                    />
                    <Icon
                      icon={'material-symbols-light:delete-outline'}
                      height={15}
                      cursor={'pointer'}
                      onClick={() => deleteTeacher(teacher.id)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        ) : null}
      </Box>
      <LeaveButton sx={{ mb: '3rem' }}>Sair</LeaveButton>
      <EditTeacherDialog
        isOpen={isDialogOpen}
        id={idTeacher}
        onClick={() => setIsDialogOpen(!isDialogOpen)}
        cpf={cpfTeacher}
      />
      ;
    </>
  );
};

export default AdminPage;
