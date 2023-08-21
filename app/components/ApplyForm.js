"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ApplyForm = () => {
    const initialValues = {
        name: '',
        last_name: '',
        email: '',
        phone: '',
        experiance: '',
        file: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
        experiance: Yup.string().required('Required'),
        file: Yup.mixed().required('Required'),
    });

    const handleSubmit = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
                <Form className="w-full mx-auto p-4 bg-transparent rounded ">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sky-500 font-semibold mb-1">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border rounded focus:outline-none bg-transparent text-white focus:border-blue-500"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sky-500 font-semibold mb-1">
                                Last Name
                            </label>
                            <Field
                                type="text"
                                id="last_name"
                                name="last_name"
                                className="w-full p-2 border rounded focus:outline-none bg-transparent text-white focus:border-blue-500"
                            />
                            <ErrorMessage name="last_name" component="div" className="text-red-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sky-500 font-semibold mb-1">
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border rounded focus:outline-none bg-transparent text-white focus:border-blue-500"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="phone" className="block text-sky-500 font-semibold mb-1">
                                Phone Number
                            </label>
                            <Field
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full p-2 border rounded focus:outline-none bg-transparent text-white focus:border-blue-500"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500" />
                        </div>
                        <div>
                            <label htmlFor="experiance" className="block text-sky-500 font-semibold mb-1">
                                Experience
                            </label>
                            <Field
                                type="text"
                                id="experiance"
                                name="experiance"
                                className="w-full p-2 border rounded focus:outline-none bg-transparent text-white focus:border-blue-500"
                            />
                            <ErrorMessage name="experiance" component="div" className="text-red-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="file" className="block text-sky-500 font-semibold mb-1">
                            Upload Resume
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={(event) => setFieldValue('file', event.currentTarget.files[0])}
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="file" component="div" className="text-red-500" />
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ApplyForm;
