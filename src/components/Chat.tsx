import Grid from '@material-ui/core/Grid'
import MessageInput from './MessageInput'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ChatBubble from './ChatBubble'
import IconButton from '@material-ui/core/IconButton'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import ReportDialog from './ReportDialog'
import api from '../wit/axiosInstance'
import { getResponsesFromIntents } from '../wit'
import { useState } from 'react'
import Message from '../types/Message'
import { makeStyles } from '@material-ui/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles({
  input: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  chatArea: {
    marginTop: 'auto',
    height: '80vh',
    overflowY: 'scroll'
  },
  reportIcon: {
    position: 'fixed',
    top: 70,
    right: 10,
  }
})

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)
  const classes = useStyles();

  const handleOnSend = async (message: Message) => {
    const newMessages = messages.concat(message)
    setMessages(newMessages)

    setLoading(true)
    const res = await api.get('/message', {
      params: { q: message.text },
    })
    console.log(res)
    
    const responses = await getResponsesFromIntents(res?.data?.intents)
    setMessages(newMessages.concat(responses))
    setLoading(false)
  }

  const handleReport = () => {
    console.log(messages)
    setReportOpen(true)
    //pasarle los mensajes
    //dejar que el usuario escriba su reporte
  }

  return (
    <div>
      { loading && <LinearProgress />}
      <ReportDialog open={reportOpen} messages={messages} onClose={() => setReportOpen(false)} />
      <IconButton 
        aria-label="report"
        className={classes.reportIcon}
        onClick={handleReport}
      >
        <ErrorOutlineIcon />
      </IconButton>
      <Grid container spacing={0} justify='center'>
        <Grid item xs={12} sm={8} alignContent='center' className={classes.chatArea}>
          <List>
            {messages.map((message, i) => (
              <ListItem key={i}>
                <ChatBubble message={message} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={8} alignContent='center' className={classes.input}>
          <MessageInput handleOnSend={handleOnSend} />
        </Grid>
      </Grid>
    </div>
  ) 
}

export default Chat