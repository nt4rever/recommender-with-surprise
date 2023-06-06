import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Rating {
  user_id: number;
  book_id: number;
  rating: number;
}
export interface RatingState {
  ratings: Rating[];
  rebuild: boolean;
}
const initialState: RatingState = {
  ratings: [],
  rebuild: false
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    create(state, action: PayloadAction<Rating>) {
      state.ratings.push(action.payload);
      if (state.ratings.length % 5 === 0 && state.ratings.length > 0)
        state.rebuild = true;
    },
    buildSuccess(state) {
      state.rebuild = false;
    }
  }
});

// Actions
export const ratingActions = ratingSlice.actions;

// Reducer
const ratingReducer = ratingSlice.reducer;
export default ratingReducer;
