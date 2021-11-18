import logo from './logo.svg';
import './App.css';
import MyCard from './components/card/Card'
import AppBar from './components/appbar/Appbar'
import { Fragment } from 'react';
import WithStyleBtn from './components/button/WithStyleBtn';
import { ThemeProvider,createTheme } from '@mui/material/styles';
const theme = createTheme()
function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
     <WithStyleBtn />

      </ThemeProvider>
    </Fragment>
  );
}

export default App;
