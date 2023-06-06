import { useMutation } from '@tanstack/react-query';
import { FC, ReactElement } from 'react';
import { bookServices } from '~/apis/book';
import RecommendSection from '~/components/RecommendSection';
import TrendingSection from '~/components/TrendingSection';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { ratingActions } from '~/store/ducks/rating/slice';

const Home: FC = (): ReactElement => {
  const { rebuild } = useAppSelector((state) => state.rating);
  const dispatch = useAppDispatch();
  const { mutate } = useMutation({
    mutationFn: bookServices.rebuild
  });

  if (rebuild) {
    mutate();
    dispatch(ratingActions.buildSuccess());
  }

  return (
    <div className='p-2'>
      <TrendingSection />
      <RecommendSection />
    </div>
  );
};

export default Home;
