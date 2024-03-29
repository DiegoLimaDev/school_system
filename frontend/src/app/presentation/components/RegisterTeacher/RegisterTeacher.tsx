import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { theme } from '../../../../styles/theme';
import { useHttp } from '../../../infra/useHttp/useHttp';
import { useEffect, useState } from 'react';
import { TeacherDomain } from '../../../domain/teacher.domain';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../application/hooks';
import { getSchools } from '../../../application/getSchools/getSchools.slice';
import MyButton from '../Button/MyButton';

type props = {
  editOrCreate: string;
  id?: number;
  cpf?: string;
};

const RegisterTeacher = ({ editOrCreate, id, cpf }: props) => {
  const url = 'http://localhost:8000/';
  const [schoolName, setSchoolName] = useState('');
  const { register, handleSubmit } = useForm<TeacherDomain>();
  const { entities } = useAppSelector((state) => state.getSchoolsReducer);
  const dispatch = useAppDispatch();

  //função assíncrona para disparar o get nas escolas
  const getData = async () => {
    await dispatch(getSchools());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSchoolName(event.target.value);
  };

  //função post de criação de professores
  const submitTeacher: SubmitHandler<TeacherDomain> = async (data) => {
    if (editOrCreate === 'Criar professor') {
      useHttp
        .post(`${url}register/teacher`, {
          cpf: data.cpf,
          name: data.name,
          schoolName: schoolName,
        })
        .then(() => window.location.reload())
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    }

    if (editOrCreate === 'Editar professor') {
      useHttp
        .patch(`${url}teachers/${id}`, {
          cpf: cpf,
          name: data.name,
          schoolName: schoolName,
        })
        .then(() => {
          window.location.reload();
        })
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
          <Typography fontSize={theme.sizes.medium}>{editOrCreate}</Typography>
          {editOrCreate === 'Criar professor' && (
            <OutlinedInput
              notched
              placeholder={'CPF'}
              {...register('cpf', {
                required: true,
                maxLength: 11,
                minLength: 11,
              })}
              inputProps={{ maxLength: 11 }}
            />
          )}
          <OutlinedInput
            notched
            placeholder={'Nome'}
            {...register('name', { required: true })}
          />
          {entities.length ? (
            <Select notched value={schoolName} onChange={handleChange}>
              {entities.map((school) => {
                return (
                  <MenuItem value={school.schoolName} key={school.id}>
                    {school.schoolName}
                  </MenuItem>
                );
              })}
            </Select>
          ) : (
            <Typography
              fontSize={theme.sizes.verySmall}
              color={theme.colors.black}
              textAlign={'center'}
            >
              Cadastre uma escola antes do professor
            </Typography>
          )}
          <MyButton
            variant="contained"
            onClick={handleSubmit(submitTeacher)}
            disabled={entities.length || schoolName !== '' ? false : true}
          >
            {editOrCreate}
          </MyButton>
        </Box>
      </form>
    </>
  );
};

export default RegisterTeacher;
