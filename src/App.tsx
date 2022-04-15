import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import LoginPage from './pages/LoginPage/LoginPage';
import AppMenu from './components/Menu/Menu';
import { useAppDispatch } from './store/hooks';
import { auth } from './firebase';
import { authFetchingSucces } from './store/reducers/authReducer';

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(authFetchingSucces(user));
    } else {
      // redirect
    }
  });

  return (
    <>
      <LoginPage />
      <AppMenu />
    </>
  );
}

export default App;
