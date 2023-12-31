import { Field, Form, Formik } from 'formik';
import { object, string } from "yup";
import styled from "styled-components";
import React from 'react'
import "./index.scss";
import Button from '../../Common Components/Button';
import { Link } from 'react-router-dom';

const LoginInitialValues = {
  name: '',
  email: '',
  password: '',
}

let loginSchema = object({
  name: string().required("You need a name to access!"),
  email: string().email().required(""),
  password: string().required()
});

const StyledField = styled(Field)`
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 8px;
    border-bottom: 1px solid black;
    font-size: 18px;

    &:focus{
      outline: none;
    }
`

function LoginForm() {



  return (
    <div className='formContainer'>
      <div className="formTitle">
        <h1 className='loginTitle'>Log in to Exclusive</h1>
        <h4>Enter your details below</h4>
      </div>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          console.log(values)
          // You will post to /login here
        }}
      >
        <Form className='loginForm'>
          <label htmlFor="email">Email</label>
          <StyledField id="email" name="email" placeholder="Email" type='email' />

          <label htmlFor="password">Password</label>
          <StyledField id="password" name="password" placeholder="Password" type="password" />

          <div className="SUButtonContainer">
            <Button id='createButton' type="submit">Log In</Button>
            <a id='forgotPass' href="/login">Forgot Password?</a>
          </div>
        </Form>
      </Formik>
      <p className='dontHaveAcc'>Do not have an account yet? <Link to="/register">Create an Account</Link></p>
    </div>
  )
}

export default LoginForm