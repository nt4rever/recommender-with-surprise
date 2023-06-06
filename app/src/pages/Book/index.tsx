import { useMutation } from '@tanstack/react-query';
import { Rate, Tag } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { bookServices } from '~/apis/book';
import { useAppDispatch, useAppSelector, useAuth, useBookQuery } from '~/hooks';
import { messageActions } from '~/store/ducks/message/slice';
import { ratingActions } from '~/store/ducks/rating/slice';
import getRating from '~/utils/getRating';

const Book = () => {
  const { id } = useParams<string>();
  const { ratings } = useAppSelector((state) => state.rating);
  const { auth } = useAuth();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: bookServices.ratingBook
  });

  if (!id) navigate('/');

  const myRating = getRating(ratings, {
    user_id: auth?.userId || 53425,
    book_id: Number(id)
  });

  const bookQuery = useBookQuery(id as string);

  if (bookQuery.isLoading) return null;

  const handleRating = (value: number) => {
    dispatch(
      ratingActions.create({
        user_id: auth?.userId || 53425,
        book_id: Number(id),
        rating: value
      })
    );
    mutation.mutate(
      {
        book_id: Number(id),
        user_id: auth?.userId,
        rating: value
      },
      {
        onSuccess: () => {
          dispatch(messageActions.push('Rating created successfully'));
        }
      }
    );
  };

  return (
    <>
      <div className='mb-5 grid grid-cols-2 gap-4'>
        <div className='flex items-center justify-center rounded-2xl border border-solid border-stone-200 p-8'>
          <img
            src={bookQuery.data?.book.image_url}
            alt='book-img'
            className='w-full object-cover'
          />
        </div>
        <div className='rounded-2xl border border-solid border-stone-200 p-8'>
          <Tag color='green'>IN STOCK</Tag>
          <h2 className='mt-5 text-4xl'>{bookQuery.data?.book.title}</h2>
          <div className='mt-4 flex justify-between text-sm text-stone-400'>
            <div className='line-clamp-2 max-w-[300px] overflow-hidden'>
              Author: <span className='text-black'>{bookQuery.data?.book.authors}</span>
            </div>
            <div>
              <Rate allowHalf value={bookQuery.data?.book.average_rating} disabled />{' '}
              <span className='font-bold text-black'>
                {bookQuery.data?.book.average_rating}
              </span>
            </div>
            <div>
              ID: <span className='text-black'>{id}</span>
            </div>
          </div>
          <div className='my-5 h-[1px] bg-stone-200'></div>
          <div className='mt-2 text-2xl font-bold text-primary'>$170.03</div>
          <div className='mt-5 leading-6 text-stone-500'>
            Est numquam harum aut ut. Pariatur cum blanditiis est delectus accusamus
            eveniet. Quis fugiat eligendi magni eos dignissimos numquam.
          </div>
          <div className='my-5 h-[1px] bg-stone-200'></div>
          <div>
            Your review
            <Rate className='ml-3' onChange={handleRating} value={myRating?.rating} />
          </div>
          <div className='mt-5'>
            Other review
            <div className='mt-3 flex flex-wrap gap-y-2'>
              {bookQuery.data?.ratings.map((item, index) => (
                <Tag key={index}>
                  <div>
                    {item.user_id} ({item.rating}
                    <span className='text-yellow-400'>&#9733;</span>)
                  </div>
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
