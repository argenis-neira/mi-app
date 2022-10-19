import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import rocketImg from '../images/logo192.png';


// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <div className='container mt-3'>
                    <Form>
                        <div className='row'>
                            <div className='col-md-5'>
                                <Field type="email" name="email" className='input' />
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div className='col-md-5'>
                                <Field type="password" name="password" className='input' />
                                <ErrorMessage name="password" component="div" />
                            </div>

                        </div>

                        <button type="submit" disabled={isSubmitting} className='button'>
                            <span>
                                Next
                            </span>

                        </button>
                    </Form>
                </div>

            )}
        </Formik>
    </div>
);

export default Basic;