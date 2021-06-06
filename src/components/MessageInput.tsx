import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { FC, useState } from 'react'
import Message from '../types/Message';

interface Props {
  handleOnSend: (message: Message) => void
}

const MessageInput:FC<Props> = ({ handleOnSend }) => {

  const [input, setInput] = useState('')
  console.log(input)

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInput(e.target.value)
  }

  const handleSend = () => {
    handleOnSend({id: 'user', text: input})
    setInput('')
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }
  
  //TODO: saque el align='center' de los grid items por ts jodiendo, no se que onda.
  return (
  	<Grid container spacing={0} justify='center'>
      <Grid item xs={10} alignContent='center'>
        <TextField 
          label="Escribe tu mensaje"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={input}
          onKeyDown={handleKeyDown}/>
      </Grid>
      <Grid item xs={2} style={{backgroundColor: '#0F008b', textAlign: "center"}}>
        <IconButton onClick={handleSend}>
          <SendIcon style={{fill: 'white'}}/>
        </IconButton>
      </Grid>
    </Grid>
    
  )
}

export default MessageInput