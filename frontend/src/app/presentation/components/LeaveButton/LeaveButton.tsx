import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LeaveButton = () => {
  const navigate = useNavigate();

  return (
    <Box display={'block'} mx={'auto'} mt={'5rem'} width={'fit-content'}>
      <Button variant="contained" color="warning" onClick={() => navigate('/')}>
        Sair
      </Button>
    </Box>
  );
};

export default LeaveButton;
