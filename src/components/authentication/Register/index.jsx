import React, {useState} from "react";
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from "yup";
import { PropTypes } from 'prop-types';
// icon
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
    Stack,
    TextField,
    IconButton,
    InputAdornment,
    Button

} from '@mui/material';



const RegisterForm = ({handleRegister, loading}) => {
    const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
        username: '',
        email: '',
        password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleRegister
  });

  console.log(loading);

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
        <TextField
            fullWidth
            autoComplete="username"
            type="username"
            label="Username"
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />

          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Button
        sx={{mt: 2}}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={loading}
        >
          Login
        </Button>
      </Form>
    </FormikProvider>
  );
};

RegisterForm.propTypes = {
    handleLogin: PropTypes.func,
    loading: PropTypes.bool
}

export { RegisterForm };