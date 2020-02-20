// import colors from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121', // material grey 900 (near black)
    },
    secondary: {
      main: '#616161', // material grey 700 (dark grey)
    },
    background: {
      default: '#F5F5F5', // material grey 100 (near white)
    },
  },
});

export default theme;
