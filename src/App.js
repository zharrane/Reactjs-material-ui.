import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Employees from './pages/employees/Employees';

//My own theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  shape: {
    borderRadius: '12px',
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '150px',
    width: '100%',
    height: '100%',
    position: 'fixed',
    overflowY: 'auto',
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
        <Footer />
      </div>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
