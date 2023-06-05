import React from 'react';
import BookItem from '../shared/BookItem';
import SectionButton from './Button';
import { useInfiniteQuery } from '@tanstack/react-query';
import { bookServices } from '~/apis/book';

const TrendingSection = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['books'],
    queryFn: bookServices.getTopBooks,
    getNextPageParam: (lastPage) => {
      if (lastPage.cursor < lastPage.total) return lastPage.cursor;
      return undefined;
    }
  });

  if (isLoading) return null;

  return (
    <div className='py-8'>
      <div className='flex items-center justify-center gap-10'>
        <div className='text-3xl font-bold'>Trending Now</div>
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
        <SectionButton onClick={() => fetchNextPage()}>
          {hasNextPage ? 'Load More' : 'Nothing more to load'}
        </SectionButton>
      </div>
    </div>
  );
};

export default TrendingSection;
