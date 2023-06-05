import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IUser } from '~/@types/auth';
import { authActions } from '~/store/ducks/auth/slice';
import { useAppDispatch, useAppSelector } from '.';

export interface LoginInput {
  username: string;
  password: string;
}

const useAuth = () => {
  const { isLoggedIn, currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const auth = isLoggedIn ? currentUser : null;

  const login = async (loginInput: LoginInput) => {
    setIsLoading(true);
    const user: IUser = {
      firstName: 'User',
      lastName: '#314',
      username: loginInput.username,
      userId: 314
    };

    // fake login code, success after 1s
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 300)
    );

    dispatch(
      authActions.loginSuccess({
        token: 'thisIsAToken',
        user
      })
    );
    setIsLoading(false);
    navigate(location.state?.path || '/');
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return { login, isLoading, auth, logout };
};

export { useAuth };
