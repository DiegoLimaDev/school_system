import { Box, Dialog, DialogActions } from '@mui/material';
import RegisterStudent from '../RegisterStudent/RegisterStudent';
import MyButton from '../Button/MyButton';

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
          <MyButton variant="contained" onClick={onClick}>
            Fechar
          </MyButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditStudentDialog;
