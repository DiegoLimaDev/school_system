import { Box, Button, ButtonProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

const LeaveButton = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const navigate = useNavigate();

  return (
    <Box display={'block'} mx={'auto'} mt={'5rem'} width={'fit-content'}>
      <Button
        variant="contained"
        color="warning"
        onClick={() => navigate('/')}
        {...props}
      >
        {children}
      </Button>
    </Box>
  );
};

export default LeaveButton;
