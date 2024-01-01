import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route.jsx';
import Authprovaider from './Authprovaider/Authprovaider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovaider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </Authprovaider>
  </React.StrictMode>
);
