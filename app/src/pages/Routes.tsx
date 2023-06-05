import { FC, ReactElement, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingFullPage } from '~/components/Loading';
import { useAppSelector } from '~/hooks';
const AuthPage = lazy(() => import('./AuthPage'));
const MainPage = lazy(() => import('./MainPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const AppRoutes: FC = (): ReactElement => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Suspense fallback={<LoadingFullPage />}>
      <Routes>
        <Route path='/*' element={isLoggedIn ? <MainPage /> : <AuthPage />} />
        <Route path='404' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
