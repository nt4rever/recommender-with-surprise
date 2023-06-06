import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface MessageState {
  message: string;
  open: boolean;
}
const initialState: MessageState = {
  message: '',
  open: false
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    push(state, action: PayloadAction<string>) {
      state.message = action.payload;
      state.open = true;
    },
    close(state) {
      state.open = false;
      state.message = '';
    }
  }
});

// Actions
export const messageActions = messageSlice.actions;

// Reducer
const messageReducer = messageSlice.reducer;
export default messageReducer;
