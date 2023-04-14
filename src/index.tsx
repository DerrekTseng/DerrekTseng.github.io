import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './core/MainPage';
import { ThemeProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider dir="rtl">
    <MainPage />
  </ThemeProvider>
);