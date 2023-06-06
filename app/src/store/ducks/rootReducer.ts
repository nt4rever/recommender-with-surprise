import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';
import message from './message/slice';
import rating from './rating/slice';

export const rootReducer = combineReducers({
  auth,
  message,
  rating
});
