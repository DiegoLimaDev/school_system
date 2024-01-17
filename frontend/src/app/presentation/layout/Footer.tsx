import { Box, Typography } from '@mui/material';
import { theme } from '../../../styles/theme';

const Footer = () => {
  return (
    <Box bgcolor={theme.colors.primary} p={'1rem'}>
      <Typography
        fontSize={theme.sizes.medium}
        color={theme.colors.white}
        textAlign={'center'}
      >
        Diego Lima &copy;
      </Typography>
    </Box>
  );
};

export default Footer;
