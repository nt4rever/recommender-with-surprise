import { useInfiniteQuery } from '@tanstack/react-query';
import { bookServices } from '~/apis/book';
import SectionButton from '../TrendingSection/Button';
import BookItem from '../shared/BookItem';
import React, { useState } from 'react';
import { useAuth } from '~/hooks';

const RecommendSection = () => {
  const { auth } = useAuth();

  const [isRecommend, setIsRecommend] = useState(false);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['books-recommend', auth?.userId],
    queryFn: ({ pageParam }) =>
      bookServices.getRecommendBooks({ userId: auth?.userId || 314, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.cursor < lastPage.total) return lastPage.cursor;
      return undefined;
    },
    enabled: isRecommend
  });

  // if (isLoading) return 'Nothing';

  const handleLoadMore = () => {
    setIsRecommend(true);
    fetchNextPage();
  };

  return (
    <div className='py-8'>
      <div className='flex items-center justify-center gap-10'>
        <div className='text-3xl font-bold'>Recommend for you</div>
        <div className='h-[1px] flex-grow bg-slate-200'></div>
        <SectionButton>View All</SectionButton>
      </div>
      <div className='mt-8 grid grid-cols-4 gap-8'>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((item) => (
              <BookItem key={item.book_id} data={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className='mt-8 flex justify-center'>
        <SectionButton onClick={handleLoadMore}>
          {hasNextPage ? 'Load More' : 'Get recommend'}
        </SectionButton>
      </div>
    </div>
  );
};

export default RecommendSection;
