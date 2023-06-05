import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '~/@types/auth';
import { saveLocalStorage, removeLocalStorage, KEY_LOCAL_STORAGE } from '~/utils/storage';

export interface AuthState {
  isLoggedIn: boolean;
  accessToken?: boolean;
  currentUser?: IUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: undefined,
  currentUser: undefined
};

interface AuthPayload {
  user: IUser;
  token: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<AuthPayload>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload?.user;
      saveLocalStorage(KEY_LOCAL_STORAGE.ACCESS_TOKEN, action.payload?.token);
      return state;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      removeLocalStorage(KEY_LOCAL_STORAGE.ACCESS_TOKEN);
      return state;
    }
  }
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
