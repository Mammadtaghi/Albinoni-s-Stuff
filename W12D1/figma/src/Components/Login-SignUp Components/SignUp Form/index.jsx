import { Field, Form, Formik } from 'formik';
import {object, string} from "yup";
import React from 'react'
import "./index.scss";

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

    &:focus{
      outline: none;
    }
`

function SignUpForm() {
  return (
    <>
      <h2>Create and account</h2>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        <Form clas>
          <label htmlFor="name">Name</label>
          <StyledField id="name" name="name" placeholder="Name" />

          <label htmlFor="email">Last Name</label>
          <StyledField id="email" name="email" placeholder="Email" type='email' />

          <label htmlFor="password">Email</label>
          <StyledField id="password" name="password" placeholder="Password" type="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default SignUpForm