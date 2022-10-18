import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/css/style.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AppProvider } from './context';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <App />
      </AppProvider>    
   </QueryClientProvider>
</React.StrictMode>
);

