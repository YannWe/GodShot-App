import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider InjectFirst>
      <CssVarsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
reportWebVitals();
