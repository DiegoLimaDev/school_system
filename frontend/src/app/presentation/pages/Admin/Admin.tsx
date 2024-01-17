import { Box, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import RegisterTeacher from '../../components/RegisterTeacher/RegisterTeacher';
import LeaveButton from '../../components/LeaveButton/LeaveButton';
import RegisterSchool from '../../components/RegisterSchool/RegisterSchool';

const AdminPage = () => {
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
      <RegisterTeacher />
      <LeaveButton />
    </>
  );
};

export default AdminPage;
