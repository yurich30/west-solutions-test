import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import AppMenu from './components/Menu/Menu';
import { useAppDispatch } from './store/hooks';
import { auth } from './firebase';
import { authFetchingSucces } from './store/reducers/authReducer';
import RequireAuth from './components/Auth/RequireAuth';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NewsPage from './pages/NewsPage/NewsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(authFetchingSucces(user));
    } else {
      // redirect to login if needs
    }
  });

  return (
    <>
      <AppMenu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
