import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../shared/store/hook';

interface IProps {
  children: JSX.Element
}

export function LoginGuard({ children }: IProps ) {
  const { isLoggedIn } = useAppSelector(( state ) => state.login );
  return !isLoggedIn ? children : <Navigate to="/" />;
}
