import { FC, ReactElement, lazy } from 'react';
import MainLayout from '~/layouts/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('../Home'));
const Book = lazy(() => import('../Book'));

const MainPage: FC = (): ReactElement => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Navigate to={'/'} replace />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='*' element={<Navigate to={'404'} replace />} />
      </Routes>
    </MainLayout>
  );
};

export default MainPage;
