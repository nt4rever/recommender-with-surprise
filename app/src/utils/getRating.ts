import { Rating } from '~/store/ducks/rating/slice';

function getRating(ratings: Rating[], payload: Omit<Rating, 'rating'>) {
  const index = ratings.findIndex(
    (element) =>
      element.book_id === payload.book_id && element.user_id === payload.user_id
  );
  if (index !== -1) return ratings[index];
  else undefined;
}

export default getRating;
