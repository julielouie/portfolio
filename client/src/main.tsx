import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalAppProvider from './contexts/GlobalAppProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalAppProvider />
    </BrowserRouter>
  </StrictMode>,
);
