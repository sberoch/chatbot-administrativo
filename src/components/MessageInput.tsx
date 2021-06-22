import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import IconButton from '@material-ui/core/IconButton';
import { FC, useState } from 'react'
import Message from '../types/Message';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

interface Props {
  handleOnSend: (message: Message) => void
}

const MessageInput: FC<Props> = ({ handleOnSend }) => {

  const [input, setInput] = useState('')
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState<boolean>(false);
  const canUseSpeech: boolean = SpeechRecognition.browserSupportsSpeechRecognition()

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInput(e.target.value)
  }

  const handleSend = () => {
    if (input.length !== 0) {
      handleOnSend({ id: 'user', text: input })
      setInput('')
    }
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopListening = () => {
    if (transcript.length !== 0) {
      handleOnSend({ id: 'user', text: transcript })
      setInput('')
      resetTranscript();
    }
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  return (
    <Grid container spacing={0} justify='center'>
      <Grid item xs={canUseSpeech ? 8 : 10} alignContent='center'>
        <TextField
          label="Escribe tu mensaje"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={isListening ? transcript : input}
          onKeyDown={handleKeyDown} />
      </Grid>
      {canUseSpeech &&
        <Grid item xs={2} style={{ backgroundColor: !isListening ? '#007f5f' : '#e63946', textAlign: "center" }}>
          <IconButton onClick={!isListening ? startListening : stopListening}>
            {!isListening ? (
              <MicIcon style={{ fill: 'white' }} />
            ) : (
              <SendIcon style={{ fill: 'white' }} />
            )}
          </IconButton>
        </Grid>
      }
      <Grid item xs={2} style={{ backgroundColor: '#0F008b', textAlign: "center" }}>
        <IconButton onClick={handleSend}>
          <SendIcon style={{ fill: 'white' }} />
        </IconButton>
      </Grid>
    </Grid>

  )
}

export default MessageInput