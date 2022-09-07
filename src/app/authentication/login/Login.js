import { Button, Card, CardContent, FormControl, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from '../../../utils/loader/Spinner'
import { getToken } from '../../../utils/token'
import { loginusernew } from '../../store/actions/loginActions'
import './login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup
        .string()
        .required('Please Enter your password')
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        // ),
    }),
    onSubmit: values => {
      dispatch(loginusernew(values))

    },
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  // const handlechange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setFormData({ ...formData, [name]: value })
  // }
  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   console.log(formData);
  //   dispatch(loginusernew(formData))
  //   // toast.success("Successfully Login")
  // }


  const { loading, error } = useSelector(state => state.loginReducer)

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  // if (loading) {
  //   return <Spinner/>;
  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="wrapper">
          <div className="login">
            <Card variant="outlined">
              <CardContent>
                <h1>Login </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField id="email" label="Email" variant="outlined" fullWidth name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                      <div className='error'>{formik.errors.email}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="opassword" label="Password" variant="outlined" fullWidth name='password' {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? (
                      <div className='error'>{formik.errors.password}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <div className='button-login'>
                  <Button type='submit' variant='outlined'  >Login</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login