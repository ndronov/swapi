import React from 'react';
import ReactDOM from 'react-dom/client';

import { WrappedApp } from '@components/app';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
);
