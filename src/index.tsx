import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import './index.css';
import App from './Layout';
import Fallback from './Fallback';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider>
    <React.Suspense fallback={<Fallback />}>
      <App />
    </React.Suspense>
  </Provider>
);
