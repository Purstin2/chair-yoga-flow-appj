import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerServiceWorker } from './lib/serviceWorkerRegistration';
import { initCapacitor } from './lib/capacitor';

// Inicializar recursos do Capacitor
initCapacitor().catch(console.error);

// Register service worker for offline functionality
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);