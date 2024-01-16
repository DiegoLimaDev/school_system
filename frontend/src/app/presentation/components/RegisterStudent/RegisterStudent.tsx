import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import { useHttp } from '../../../infra/useHttp/useHttp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StudentDomain } from '../../../domain/student.domain';
import { useAppSelector } from '../../../application/hooks';

type props = {
  editOrCreate: string;
  id?: number;
};

const RegisterStudent = ({ editOrCreate, id }: props) => {
  const url = 'http://localhost:8000/';
  const { register, handleSubmit } = useForm<StudentDomain>();
  const { activeCpf } = useAppSelector((state) => state.activeCpfReducer);

  //função para submissão/edição de aluno, a verficação é feita dentro da função
  const submitStudent: SubmitHandler<StudentDomain> = async (data) => {
    if (editOrCreate === 'Criar aluno') {
      useHttp
        .post(`${url}register/student`, {
          name: data.name,
          birthday: data.birthday,
          teacherCpf: activeCpf,
        })
        .then(() => window.location.reload())
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    }

    if (editOrCreate === 'Editar aluno') {
      useHttp
        .patch(`${url}student/${id}`, {
          name: data.name,
          birthday: data.birthday,
          teacherCpf: activeCpf,
        })
        .then(() => window.location.reload())
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    }
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
          <Typography fontSize={theme.sizes.medium} textAlign={'center'}>
            {editOrCreate}
          </Typography>
          <OutlinedInput
            notched
            placeholder={'Nome'}
            {...register('name', { required: true })}
          />
          <OutlinedInput
            notched
            placeholder={'Data de nascimento'}
            {...register('birthday', { required: true })}
          />
          <Button variant="contained" onClick={handleSubmit(submitStudent)}>
            <Typography fontSize={theme.sizes.small}>{editOrCreate}</Typography>
          </Button>
        </Box>
      </form>
    </>
  );
};

export default RegisterStudent;
