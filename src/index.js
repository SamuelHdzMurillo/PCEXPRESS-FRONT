import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './DeviceCards';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, puedes mantener el código existente para reportWebVitals

reportWebVitals();
