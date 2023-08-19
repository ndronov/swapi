import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { PrimeReactProvider } from 'primereact/api';

import { AppRoutes } from '../AppRoutes';

import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';

import './global.css';

export function WrappedApp() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <PrimeReactProvider>
          <AppRoutes />
        </PrimeReactProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
