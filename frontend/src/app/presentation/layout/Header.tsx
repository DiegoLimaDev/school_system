import { Box, Typography } from '@mui/material';
import { theme } from '../../../styles/theme';

const Header = () => {
  return (
    <Box bgcolor={theme.colors.primary} p={'1rem'}>
      <Typography
        fontSize={theme.sizes.medium2}
        color={theme.colors.white}
        textAlign={'center'}
      >
        Sistema escolar
      </Typography>
    </Box>
  );
};

export default Header;
