import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { MyInput } from '../../shared/components/Forms/Input';
import { MyTextarea } from '../../shared/components/Forms/Textarea';

import Input from './Input';
import Textarea from './Textarea';
import Dropdown from './Select';

const Forms = () => {
  return (
    <div>
      <h1>Submit on Blur</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <Input />
          <Textarea />
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <h1>Submit on click</h1>
      <Formik
        initialValues={{ input: '', textarea: '' }}
        validationSchema={yup.object({
          input: yup
            .string()
            .max(15, 'Must be 15 characters or less')
            .required('Field is required'),
          textarea: yup.string().required('Field is required'),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, 2, null));
          resetForm({});
        }}
      >
        <Form>
          <div style={{ width: '250px' }}>
            <MyInput label='Input' name='input' />
          </div>
          <label>Textarea</label>
          <div style={{ width: '250px', height: '150px' }}>
            <MyTextarea name='textarea' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;
