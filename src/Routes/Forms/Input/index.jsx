import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { InputField } from '../../../shared/components/Forms/Input';

const Input = () => {
  return (
    <Formik
      initialValues={{ inputvalue: '' }}
      validationSchema={yup.object({
        inputvalue: yup
          .string()
          .max(15, 'Must be 15 characters or less')
          .required('Field is required'),
      })}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, 2, null));
        resetForm({});
      }}
    >
      <Form>
        <div style={{ width: '250px' }}>
          <InputField label='Input' name='inputvalue' />
        </div>
      </Form>
    </Formik>
  );
};

export default Input;
