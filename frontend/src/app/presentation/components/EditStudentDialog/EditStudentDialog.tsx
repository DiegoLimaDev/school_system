import { Box, Button, Dialog, DialogActions, Typography } from '@mui/material';
import RegisterStudent from '../RegisterStudent/RegisterStudent';
import { theme } from '../../../../styles/theme';

type props = {
  isOpen: boolean;
  onClick: () => void;
  id?: number;
};

const EditStudentDialog = ({ isOpen, onClick, id }: props) => {
  return (
    <Box>
      <Dialog open={isOpen} onClose={onClick}>
        <Box p={'1rem'}>
          <RegisterStudent editOrCreate={'Editar aluno'} id={id} />
        </Box>
        <DialogActions>
          <Button variant="contained" onClick={onClick}>
            <Typography fontSize={theme.sizes.small}>Fechar</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditStudentDialog;
