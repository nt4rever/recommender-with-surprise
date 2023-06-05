import { FC, ReactElement } from 'react';
import RecommendSection from '~/components/RecommendSection';
import TrendingSection from '~/components/TrendingSection';

const Home: FC = (): ReactElement => {
  return (
    <div className='p-2'>
      <TrendingSection />
      <RecommendSection />
    </div>
  );
};

export default Home;
