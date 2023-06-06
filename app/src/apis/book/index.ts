import { BookDetailResponse, BookResponse } from '~/@types/book';
import axiosClient from '~/utils/axiosClient';

enum ENDPOINT {
  TOP_BOOKS = '/books',
  BOOK = '/book',
  RECOMMEND = '/recommend',
  RATING = '/rating',
  REBUILD = '/rebuild'
}

const getTopBooks = async ({ pageParam = 0, limit = 8 }) => {
  const { data } = await axiosClient.get<BookResponse>(ENDPOINT.TOP_BOOKS, {
    params: { skip: pageParam, limit }
  });
  return data;
};

const getBook = async (bookId: number | string) => {
  const { data } = await axiosClient.get<BookDetailResponse>(
    `${ENDPOINT.BOOK}/${bookId}`
  );
  return data;
};

const getRecommendBooks = async ({
  pageParam = 0,
  limit = 8,
  userId
}: {
  pageParam?: number;
  limit?: number;
  userId: number;
}) => {
  const { data } = await axiosClient.get<BookResponse>(
    `${ENDPOINT.RECOMMEND}/${userId}`,
    {
      params: { skip: pageParam, limit }
    }
  );
  return data;
};

interface RatingPayload {
  book_id?: number;
  user_id?: number;
  rating: number;
}

const ratingBook = async (payload: RatingPayload) => {
  const { data } = await axiosClient.post(ENDPOINT.RATING, payload);
  return data;
};

const rebuild = async () => {
  const { data } = await axiosClient.post(ENDPOINT.REBUILD);
  return data;
};

export const bookServices = {
  getTopBooks,
  getBook,
  getRecommendBooks,
  ratingBook,
  rebuild
};
