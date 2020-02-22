import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './utils/serviceWorker';

const WrappedApp:React.FC = () => (
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <App />
  </ThemeProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
