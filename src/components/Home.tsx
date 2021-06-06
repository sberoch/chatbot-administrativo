import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

const styles = {
  infoCard: {
    height: "100%"
  },
  cardTitle: {
    padding: 20,
  }
}

const howToUseList = [
  "Al hacer click en continuar comenzarás a chatear con el bot",
  "Preguntale lo que quieras. Se recomienda mirar la sección ¿Que preguntar?",
  "Si notás algun problema o tenes alguna sugerencia, hace click en el boton de reporte y contanos que pasó",
]

const whatToAskList = [
  "De ser posible, estructurá tus dudas de forma simple",
  "No es recomendable copiar y pegar un enunciado entero. Mejor preguntar dudas puntuales",
  "Si no se entiende tu pregunta, intentalo de nuevo con otras palabras",
]

export default function Home() {
  return (
    <Grid container spacing={3} justify='center' style={{marginTop: 20}}>
      <Grid xs={11} style={{padding: 15}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
            <Paper elevation={3} style={styles.infoCard}>
              <Typography variant="h5" style={styles.cardTitle}>
                ¿Como usar?
              </Typography> 
              <List component="nav">
                {howToUseList.map(it => (
                  <ListItem key={it}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={it} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
            <Paper elevation={3} style={styles.infoCard}>
              <Typography variant="h5" style={styles.cardTitle}>
                ¿Que puedo preguntar?
              </Typography>
              <List component="nav">
                {whatToAskList.map(it => (
                  <ListItem key={it}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={it} />
                  </ListItem>
                ))}
              </List> 
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} alignContent='center' style={{marginTop: 40}}>
        <Button
          component={Link}
          to='/chat' 
          variant="contained" 
          color="primary" 
          fullWidth 
          size="large"
        >
          Comenzar
        </Button>
      </Grid>
    </Grid>
  )
}