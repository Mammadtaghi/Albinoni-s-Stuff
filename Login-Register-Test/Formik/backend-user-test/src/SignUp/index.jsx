import React from 'react'
import "./index.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const FormikInitialValues = {
    username: '',
    password: '',
    role: 'User'
}

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
    .notOneOf(['admin','user'],"Don't be a kid!")
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('This is required'),
    password: Yup.string()
        .min(4, "Password should contain at least 4 characters!")
        .required("You need a password"),
    role: Yup.string()
})

function SignUp() {

    async function handleValues(values) {

        console.log(values);

        const response = await axios.post('http://localhost:8000/register', values)

    }

    return (
        <>
        <h1>Sign Up</h1>
        <Formik
            initialValues={FormikInitialValues}
            validationSchema={SignUpSchema}
            onSubmit={values => handleValues(values)}
        >
            <Form className="AlbiForm">

                <label htmlFor="username">Username</label>
                <Field id='' name='username' placeholder='Enter username' />
                <ErrorMessage name="username" />
                <label htmlFor="password">Password</label>
                <Field id='' name='password' placeholder='Enter password' />
                <ErrorMessage name="password" />
                <label htmlFor="role">Role</label>
                <Field id='' name='role' placeholder='Enter role' />

                <button type="submit">Submit</button>

            </Form>
        </Formik>
        </>
    )
}

export default SignUp