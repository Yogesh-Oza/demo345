import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, resetPassword, resetPasswordRequest } from '../../../State/Authentication/Action';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
});


const ResetPasswordRequest = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
  const handleSubmit = (values) => {
    // You can handle login submission here, e.g., send data to your server
    console.log('Login form values:', values);
    dispatch(resetPasswordRequest(values.email))
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography className='text-center' variant='h5'>Forgot Password</Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                id="email"
                autoComplete="email"
                helperText={<ErrorMessage name="email" />}
              />
              
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
                Send Reset Password Link
              </Button>
            </Form>
          </Formik>
          
        </div>
      </Container>
  );
};

export default ResetPasswordRequest;
