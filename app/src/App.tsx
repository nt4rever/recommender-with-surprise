import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingFixed, LoadingFullPage } from './components/Loading';
import AppRoutes from './pages/Routes';
import { persistor } from './store';
import { theme } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <PersistGate persistor={persistor} loading={<LoadingFullPage />}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <BrowserRouter>
            <LoadingFixed />
            <AppRoutes />
          </BrowserRouter>
          <ReactQueryDevtools
            initialIsOpen={false}
            position='bottom-right'
            panelPosition='right'
          />
        </ConfigProvider>
      </QueryClientProvider>
    </PersistGate>
  );
}

export default App;
