import { Button, ButtonProps, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import { PropsWithChildren } from 'react';

type props = ButtonProps;

const MyButton = ({ children, ...props }: PropsWithChildren<props>) => {
  return (
    <Button variant="contained" {...props}>
      <Typography fontSize={theme.sizes.small}>{children}</Typography>
    </Button>
  );
};

export default MyButton;
