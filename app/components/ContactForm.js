"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
        file: Yup.mixed().required('Required'),
    });

    const handleSubmit = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
                <Form className="w-full mx-auto p-4 bg-slate-50 rounded shadow-md">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
                            Phone Number
                        </label>
                        <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="phone" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                            Message
                        </label>
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-gray-700 font-semibold mb-1">
                            File Upload
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

export default ContactForm;
