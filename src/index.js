import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App.js';

const container = document.getElementById('root');
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
