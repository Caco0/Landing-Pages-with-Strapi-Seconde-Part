import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";

import { theme } from './styles/theme.js';
import { GlobalStyles } from './styles/global-styles.js';
import Home from './templates/App/Index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Home />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)
