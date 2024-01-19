import { Box, OutlinedInput, Typography } from '@mui/material';
import MyButton from '../Button/MyButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SchoolDomain } from '../../../domain/school.domain';
import { useHttp } from '../../../infra/useHttp/useHttp';
import { theme } from '../../../../styles/theme';

const RegisterSchool = () => {
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
          {...(register('schoolName'), { required: true })}
        />
        <OutlinedInput
          notched
          placeholder={'Endereço'}
          {...(register('schoolAddress'), { required: true })}
        />
        <MyButton variant="contained" onClick={handleSubmit(submitSchool)}>
          CRIAR ESCOLA
        </MyButton>
      </Box>
    </form>
  );
};

export default RegisterSchool;
