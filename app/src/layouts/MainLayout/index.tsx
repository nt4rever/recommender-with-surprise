import { FC, ReactElement } from 'react';
import Header from '~/components/Header';

type MainLayoutProps = {
  children: any;
};

const MainLayout: FC<MainLayoutProps> = ({ children }): ReactElement => {
  return (
    <div className='px-8'>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
