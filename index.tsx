import React from 'react';
import ReactDOM from 'react-dom/client';
// DETERMINISTIC FIX: HashRouter resolves static host routing errors and 404s
import { HashRouter } from 'react-router-dom'; 
import App from './App';
import './index.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
