import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';

const Forgot = () => {
    const navigate = useNavigate()

    const onClickLogin = () => {
        navigate('/Login')
    }

    const onSubmit = (value) => {
        console.log("value++", value)
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('email is required')
    });

    return (
        <div>
            <h1 className='text-center mt-5'>Forgot Password</h1>
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className='w-50 mx-auto'>
                        <div>
                            <Field name="email" type="text" placeholder="Enter your Email address" className="form-control mb-2" />
                            {errors.email && touched.email ? (
                                <div className='text-danger'>{errors.email}</div>
                            ) : null}
                        </div>
                        <div className='text-center mb-5'>
                            <button type='submit' className='btn btn-success'>submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className='text-center mb-5'>
                <p>
                    <span>Back to login</span>
                    <button onClick={onClickLogin} className='btn btn-primary m-2'>Login</button>
                </p>
            </div>
        </div>
    )
}

export default Forgot
