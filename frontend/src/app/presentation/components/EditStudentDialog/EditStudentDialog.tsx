import { Box, Dialog, DialogActions } from '@mui/material';
import RegisterStudent from '../RegisterStudent/RegisterStudent';
import LeaveButton from '../LeaveButton/LeaveButton';

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
          <LeaveButton onClick={onClick}>Fechar</LeaveButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditStudentDialog;
