import {
  Box,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { theme } from '../../../../styles/theme';
import { useHttp } from '../../../infra/useHttp/useHttp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginDataDomain } from '../../../domain/loginData.domain';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../application/hooks';
import { getTeacher } from '../../../application/getTeacher/getTeacher.slice';
import MyButton from '../../components/Button/MyButton';

const Home = () => {
  const url = 'http://localhost:8000/login';

  //estado que define o tipo de usuário
  const [value, setValue] = useState<string | number>(0);

  //estado que define se a senha está visível
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginDataDomain>();
  const { cpf } = getValues();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //método post para login
  const onSubmit: SubmitHandler<LoginDataDomain> = async (
    data: LoginDataDomain,
  ) => {
    await useHttp
      .post(url, {
        cpf: data.cpf,
        password: data.password,
        usertype: value,
      })
      .then(async () => {
        //dispara o get do professor que será logado
        await dispatch(getTeacher(cpf));

        //verificação do tipo de usuário que difere a navegação de páginas
        if (value === 0) navigate('/admin');
        if (value === 2) navigate('/teacher');
      })
      .catch((err) => {
        if (err) {
          console.log('bad request');
        }
      });
  };

  return (
    <form style={{ placeItems: 'center', display: 'flex' }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={'20rem'}
        m={'5rem auto 0 auto'}
        justifyContent={'space-between'}
        height={'25rem'}
      >
        <OutlinedInput
          notched
          placeholder={'cpf'}
          {...register('cpf', {
            required: true,
          })}
          inputProps={{
            maxLength: 11,
            style: { fontSize: theme.sizes.small, border: '1px black' },
          }}
        />
        <OutlinedInput
          notched
          placeholder={'password'}
          {...register('password', { required: true })}
          type={showPassword ? 'text' : 'password'}
          inputProps={{ style: { fontSize: theme.sizes.small } }}
          endAdornment={
            <InputAdornment position="end">
              <Icon
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? 'ion:eye-off-outline' : 'ion:eye-outline'}
                height={20}
                cursor={'pointer'}
              />
            </InputAdornment>
          }
        />
        <Select
          notched
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tipo de login"
          MenuProps={{ style: { fontSize: theme.sizes.small } }}
          sx={{ fontSize: theme.sizes.small }}
        >
          <MenuItem value={0} sx={{ fontSize: theme.sizes.verySmall }}>
            Admin
          </MenuItem>
          <MenuItem value={2} sx={{ fontSize: theme.sizes.verySmall }}>
            Professor
          </MenuItem>
        </Select>
        {(errors.cpf || errors.password) && (
          <Typography fontSize={theme.sizes.small} textAlign={'center'}>
            Credenciais inválidas
          </Typography>
        )}
        <MyButton variant="contained" onClick={handleSubmit(onSubmit)}>
          LOGIN
        </MyButton>
      </Box>
    </form>
  );
};

export default Home;
