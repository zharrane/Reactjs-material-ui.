import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import SideMenu from './components/SideMenu';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

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
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="title"
          subTitle="sub title"
          icon={<PeopleOutlineIcon />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
