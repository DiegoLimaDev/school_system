import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { theme } from '../../../../styles/theme';
import { useHttp } from '../../../infra/useHttp/useHttp';
import { useForm } from 'react-hook-form';
import { LoginDataDomain } from '../../../domain/loginData.domain';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const url = 'http://localhost:8000/login';
  const [value, setValue] = useState('0');
  const { register, handleSubmit } = useForm<LoginDataDomain>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginDataDomain) => {
    useHttp
      .post(url, {
        cpf: data.cpf,
        password: data.password,
      })
      .then(() => navigate('admin'))
      .catch((err) => {
        if (err) {
          console.log('bad request');
        }
      });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={'20rem'}
        m={'5rem auto 0 auto'}
        justifyContent={'space-between'}
        height={'20rem'}
      >
        <OutlinedInput notched placeholder={'cpf'} {...register('cpf')} />
        <OutlinedInput
          notched
          placeholder={'password'}
          {...register('password')}
        />
        <Select
          notched
          value={value}
          onChange={handleChange}
          placeholder="Tipo de login"
        >
          <MenuItem value={0}>Admin</MenuItem>
          <MenuItem value={1}>Professor</MenuItem>
          <MenuItem value={2}>Escola</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          <Typography fontSize={theme.sizes.small}>Login</Typography>
        </Button>
      </Box>
    </form>
  );
};

export default Home;
