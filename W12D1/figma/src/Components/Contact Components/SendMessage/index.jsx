import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Button from '../../Common Components/Button'
import './index.scss'
import styled from 'styled-components'

const MessageSchema = Yup.object().shape({
    person: Yup.object().shape({
        name: Yup.string().required('Field is required'),
        email: Yup.string()
            .email('Wrong e-mail format')
            .required('Field is required'),
        phone: Yup.string().required('Field is required'),
        message: Yup.string().required('You want to send message ?')
    })
})

const StyledField = styled(Field)`
    all: unset;
    border: 1px solid transparent;

    &:focus{
        border: 1px solid black;
    }
`

function SendMessage() {
    return (
        <div id='SendMessage'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={MessageSchema}
                onSubmit={values => console.log(values)}
            >
                <Form className='messageForm'>

                    <div className="formContainer">

                        <StyledField id='name' name='name' placeholder='Your Name' />

                        <StyledField id='email' name='email' placeholder='Your Email' type='email' />

                        <StyledField id='phone' name='phone' placeholder='Your Phone' type='tel' />

                    </div>

                    <StyledField as='textarea' rows={12} id='message' name='Message' placeholder='Your Message' />

                    <Button alignSelf='flex-end' fontSize='16px' type='Submit'>Send Message</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default SendMessage