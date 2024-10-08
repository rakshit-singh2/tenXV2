import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/fonts.css';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
