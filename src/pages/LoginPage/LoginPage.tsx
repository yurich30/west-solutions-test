import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../store/hooks';
import {
  authFetching,
  authFetchingError,
  authFetchingSucces,
} from '../../store/reducers/authReducer';

const validationSchema = yup.object({
  email: yup
    // @ts-ignore
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    // @ts-ignore
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const { email, password } = values;
        dispatch(authFetching());
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const { user } = userCredential;
        dispatch(authFetchingSucces(user));
        navigate('/profile');
      } catch (error) {
        dispatch(authFetchingError(error));
      }
    },
  });

  return (
    <Container maxWidth='xl'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default LoginPage;
