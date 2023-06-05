import { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionButton from '~/components/TrendingSection/Button';

const NotFoundPage: FC = (): ReactElement => {
  const location = useLocation();
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-paper-pattern bg-center bg-no-repeat text-center'>
      <h1 className='text-9xl font-bold text-primary'>404</h1>
      <h2 className='my-5 text-5xl font-semibold'>
        OOPS! THAT PAGE CAN&apos;T BE FOUND.
      </h2>
      <p className='mb-6 max-w-3xl text-xl text-stone-500'>
        It looks like nothing was found at this location. You can either go back to the
        last page or go to homepage.
      </p>
      <Link to={location.state?.from || '/'}>
        <SectionButton>Back</SectionButton>
      </Link>
    </div>
  );
};

export default NotFoundPage;
