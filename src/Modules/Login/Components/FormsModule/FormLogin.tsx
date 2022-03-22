import { TextField, Button } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import { ILoginState } from '../../Interface/LoginInterface';
import { loginSchema } from '../../validation/login.validation';
import { useAppDispatch } from '../../../../shared/store/hook';
import { postLogin } from '../../action/Login.reducer';

export function FormLogin() {
  const dispatch = useAppDispatch();
  const {
    getFieldProps, handleSubmit, errors, touched,
  } = useFormik<ILoginState>({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: loginSchema,
    onSubmit: ( formValues ) => {
      console.log( formValues );
      dispatch( postLogin( formValues ));
      /* resetForm(); */
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="false"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        {...getFieldProps( 'email' )}
        autoComplete="email"
        autoFocus
        error={!!errors.email && touched.email}
        helperText={errors.email && touched.email && errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        {...getFieldProps( 'password' )}
        error={!!errors.password && touched.password}
        helperText={errors.password && touched.password && errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Iniciar Sesion
      </Button>
    </form>

  );
}
