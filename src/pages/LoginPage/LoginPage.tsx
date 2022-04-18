import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CustomContainer } from '../../components/CustomComponents/CustomContainer.styled';
import { auth } from '../../firebase';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  authFetching,
  authFetchingError,
  authFetchingSucces,
} from '../../store/reducers/authReducer';
import 'react-toastify/dist/ReactToastify.css';

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
  const { error } = useAppSelector(state => state.auth);
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
      } catch (err) {
        dispatch(authFetchingError(err));
        toast.error('The username or password you entered is incorrect', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  return (
    <CustomContainer maxWidth='xl'>
      {error && (
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
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
          margin='normal'
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
          margin='normal'
        />
        <Button
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
          style={{ marginTop: '32px' }}
        >
          Submit
        </Button>
      </form>
    </CustomContainer>
  );
}

export default LoginPage;
