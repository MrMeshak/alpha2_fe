import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './styles/globals.scss';
import FavProductsContextProvider from './context/favProductsContextProvider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FavProductsContextProvider>
          <App />
        </FavProductsContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
