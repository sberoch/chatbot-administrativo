import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#018fd1',
    },
    secondary: {
      main: '#162b32',
    },
  },
  typography: {
    fontFamily: [
      'Nunito'
    ].join(','),
  },
});

export default theme;