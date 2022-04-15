import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = userCredential;
      console.log(user);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
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
