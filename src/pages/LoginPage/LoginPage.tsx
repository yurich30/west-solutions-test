import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../store/hooks';
import {
  authFetching,
  authFetchingError,
  authFetchingSucces,
} from '../../store/reducers/authReducer';

function LoginPage() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = async () => {
    try {
      dispatch(authFetching());
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = userCredential;
      dispatch(authFetchingSucces(user));
      setEmail('');
      setPassword('');
    } catch (error) {
      dispatch(authFetchingError(error));
    }
  };

  return (
    <>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={signIn}>log in</button>
    </>
  );
}

export default LoginPage;
