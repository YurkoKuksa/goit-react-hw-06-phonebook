import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { theme } from 'styles/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    <ToastContainer autoClose={1000} />
    <GlobalStyle />
  </ThemeProvider>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
