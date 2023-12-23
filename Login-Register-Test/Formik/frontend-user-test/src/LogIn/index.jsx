import React, { useState } from 'react'
import "./index.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const FormikInitialValues = {
    username: '',
    password: '',
    role: 'User'
}

const LogInSchema = Yup.object().shape({
    username: Yup.string()
        .notOneOf(['admin', 'user'], "Don't be a kid!")
        .min(2, "Your name Can't be this Short!")
        .max(20, "Your name Can't be this Long!")
        .required('This is required'),
    password: Yup.string()
        .min(4, "Password should contain at least 4 characters!")
        .required("You need a password to access!"),
    role: Yup.string()
})

function LogIn() {

    const [token, setToken] = useState('')

    async function handleValues(values) {

        const response = await axios.post('http://localhost:8000/login', values)

        const data = response.data

        setToken(data)

        

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Log In</h1>
            <Formik
                initialValues={FormikInitialValues}
                validationSchema={LogInSchema}
                onSubmit={values => handleValues(values)}
            >
                <Form className="AlbiForm">

                    <label htmlFor="username">Username</label>
                    <Field id='' name='username' placeholder='Enter username' />
                    <ErrorMessage component={'span'} name="username" />
                    <label htmlFor="password">Password</label>
                    <Field id='' name='password' placeholder='Enter password' />
                    <ErrorMessage component={'span'} name="password" />

                    <button type="submit">Submit</button>

                </Form>
            </Formik>
            <textarea name="token" id="token" defaultValue={token} cols="30" rows="10"></textarea>
            <Link to='/register'>Go to Register</Link>
        </div>
    )
}

export default LogIn