import { FC, ReactElement } from 'react';
import Header from '~/components/Header';
import PushNotification from '~/components/PushNotification';

type MainLayoutProps = {
  children: any;
};

const MainLayout: FC<MainLayoutProps> = ({ children }): ReactElement => {
  return (
    <div className='px-8'>
      <Header />
      {children}
      <PushNotification />
    </div>
  );
};

export default MainLayout;
