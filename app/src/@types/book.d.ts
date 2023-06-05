export interface Book {
  id: number;
  book_id: number;
  best_book_id: number;
  work_id: number;
  books_count: number;
  isbn?: string;
  isbn13?: number;
  authors: string;
  original_publication_year?: number;
  original_title?: string;
  title: string;
  language_code?: string;
  average_rating: number;
  ratings_count: number;
  work_ratings_count: number;
  work_text_reviews_count: number;
  ratings_1: number;
  ratings_2: number;
  ratings_3: number;
  ratings_4: number;
  ratings_5: number;
  image_url: string;
  small_image_url: string;
  rating_predicted?: number;
}

export interface BookResponse {
  total: number;
  cursor: number;
  data: Book[];
}

export interface BookDetailResponse {
  book: Book;
  ratings: {
    book_id: number;
    user_id: number;
    rating: number;
  }[];
}
