import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import LoginPage from './pages/LoginPage/LoginPage';
import AppMenu from './components/Menu/Menu';
import { auth } from './firebase';

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const { uid } = user;
        console.log(uid);
      } else {
        console.log('User is signed out');
      }
    });
  });

  return (
    <>
      <LoginPage />
      <AppMenu />
    </>
  );
}

export default App;
