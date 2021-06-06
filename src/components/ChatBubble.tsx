import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import Message from '../types/Message';

const styles = {
  botBubble: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#eee",
    maxWidth: '90%'
  },
  userBubble: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#018fd1",
    color: "#FFF",
    maxWidth: '90%'
  }
}

interface Props {
  message: Message
}

const ChatBubble: FC<Props> = ({ message }) => {
  const isFromUser = message.id === 'user'
  return (
    <div style={{
      display: 'flex',
      justifyContent: isFromUser ? 'flex-end' : 'flex-start',
      width: '100%'
    }}>
      <Paper 
        variant='outlined' 
        style={isFromUser ? styles.userBubble : styles.botBubble}
      >
        <Typography variant="body1">
          {message.text}
        </Typography>
      </Paper>
    </div>
  )
}

export default ChatBubble