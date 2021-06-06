import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FC } from 'react';
import Message from '../types/Message';

interface Props {
  open: boolean,
  onClose: () => void,
  messages: Message[]
}

const ReportDialog: FC<Props> = ({ onClose, open, messages }) => {

  const handleSend = async () => {
    console.log('Enviando reporte')
    console.log(messages)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enviar reporte de error</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, describí a continuación el error que ocurrió.
        </DialogContentText>
        <DialogContentText>
          Además, se enviarán los mensajes de la conversación con el chatbot automáticamente.
        </DialogContentText>
        <TextField
          autoFocus
          multiline
          rows={4}
          variant="outlined"
          label="Reporte de Error"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSend} color="primary">
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ReportDialog