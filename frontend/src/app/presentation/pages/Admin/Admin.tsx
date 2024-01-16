import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import { useHttp } from '../../../infra/useHttp/useHttp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SchoolDomain } from '../../../domain/school.domain';
import RegisterTeacher from '../../components/RegisterTeacher/RegisterTeacher';

const AdminPage = () => {
  const url = 'http://localhost:8000/';
  const { register, handleSubmit } = useForm<SchoolDomain>();

  //método post para registrar a escola
  const submitSchool: SubmitHandler<SchoolDomain> = async (
    data: SchoolDomain,
  ) => {
    useHttp
      .post(`${url}register/school`, {
        schoolName: data.schoolName,
        schoolAddress: data.schoolAddress,
      })
      .then(() => window.location.reload())
      .catch((err) => {
        if (err) {
          console.log('bad request');
        }
      });
  };

  return (
    <>
      <form>
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'20rem'}
          m={'5rem auto 0 auto'}
          justifyContent={'space-between'}
          height={'25rem'}
        >
          <Typography fontSize={theme.sizes.medium}>Criar Escola</Typography>
          <OutlinedInput
            notched
            placeholder={'Nome da escola'}
            {...register('schoolName')}
          />
          <OutlinedInput
            notched
            placeholder={'Endereço'}
            {...register('schoolAddress')}
          />
          <Button variant="contained" onClick={handleSubmit(submitSchool)}>
            <Typography fontSize={theme.sizes.small}>Criar escola</Typography>
          </Button>
        </Box>
      </form>
      <RegisterTeacher />
    </>
  );
};

export default AdminPage;
