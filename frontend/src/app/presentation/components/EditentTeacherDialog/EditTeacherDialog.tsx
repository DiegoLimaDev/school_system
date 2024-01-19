import { Box, Dialog, DialogActions } from '@mui/material';
import LeaveButton from '../LeaveButton/LeaveButton';
import RegisterTeacher from '../RegisterTeacher/RegisterTeacher';

type props = {
  isOpen: boolean;
  onClick: () => void;
  id?: number;
  cpf?: string;
};

const EditTeacherDialog = ({ isOpen, onClick, id, cpf }: props) => {
  return (
    <Box>
      <Dialog open={isOpen} onClose={onClick}>
        <Box p={'1rem'}>
          <RegisterTeacher
            editOrCreate={'Editar professor'}
            id={id}
            cpf={cpf}
          />
        </Box>
        <DialogActions>
          <LeaveButton onClick={onClick}>Fechar</LeaveButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditTeacherDialog;
