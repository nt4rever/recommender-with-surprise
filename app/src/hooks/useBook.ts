import { useQuery } from '@tanstack/react-query';
import { bookServices } from '~/apis/book';

export const useBookQuery = (bookId: number | string) =>
  useQuery({
    queryKey: ['book', bookId],
    queryFn: () => bookServices.getBook(bookId)
  });
