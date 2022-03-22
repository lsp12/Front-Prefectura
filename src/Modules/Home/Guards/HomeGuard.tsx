import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../shared/store/hook';

interface IProp {
  children: JSX.Element
}

export function HomeGuard({ children }: IProp ) {
  const { isLoggedIn } = useAppSelector(( state ) => state.login );
  return isLoggedIn ? children : <Navigate to="/login" />;
}
