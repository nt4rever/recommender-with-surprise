import { Rate } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '~/@types/book';

interface BookItemIProps {
  data: Book;
}

const BookItem: FC<BookItemIProps> = ({ data }) => {
  return (
    <div className='w-full'>
      <div>
        <Link to={`/book/${data.id}`}>
          <img
            src={
              data.image_url ||
              'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/35.jpg'
            }
            alt='book-img'
            className='aspect-[3/4] w-full rounded-2xl'
          />
        </Link>
      </div>
      <div className='mt-4'>
        <Link
          to={`/book/${data.id}`}
          className='text-black no-underline hover:text-primary'
        >
          <h3 className='line-clamp-2'>{data.title}</h3>
        </Link>
        <div className='mt-2'>
          <Rate allowHalf defaultValue={data.average_rating} disabled />
          <span className='ml-2 text-sm font-semibold'>{data.average_rating}</span>
          {data.rating_predicted && (
            <span className='ml-2 text-sm font-semibold text-stone-400'>
              (Predict: {data.rating_predicted.toFixed(2)})
            </span>
          )}
        </div>
        <div className='mt-2 text-sm font-medium text-stone-400'>{data.authors}</div>
        <div className='mt-2 text-2xl font-bold text-primary'>$170.03</div>
      </div>
    </div>
  );
};

export default BookItem;
