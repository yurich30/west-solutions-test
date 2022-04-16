import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAppSelector(state => state.auth);
  const location = useLocation();

  if (!Object.keys(user).length) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
