import { Field, Form, Formik } from 'formik';
import Google from "./../../../images/Icon-Google.png";
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

let signupSchema = object({
  name: string().required("Required"),
  email: string().email().required("Required"),
  password: string().required("Required")
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

function SignUpForm() {



  return (
    <>
      <div className="formContainer">
        <div className="formTitle">
          <h1 className='signupTitle'>Create an account</h1>
          <h4>Enter your details below</h4>
        </div>
        <Formik
          initialValues={LoginInitialValues}
          validationSchema={signupSchema}
          onSubmit={async (values) => {
            console.log(values)
          }}
        >
          <Form className='SignupForm'>
            <StyledField id="name" name="name" placeholder="Name" />

            <StyledField id="email" name="email" placeholder="Email" type='email' />

            <StyledField id="password" name="password" placeholder="Password" type="password" />

            <Button type="submit">Create an account</Button>

            <Button bgColor='transparent' color='black' columnGap='20px' border='1px solid black' >
              <img src={Google} alt="Google" />
              Sign up with Google
            </Button>

          </Form>
        </Formik>
        <p className='haveAccount'>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </>
  )
}

export default SignUpForm