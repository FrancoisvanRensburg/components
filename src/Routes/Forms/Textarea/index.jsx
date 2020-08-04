import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { TextareaField } from '../../../shared/components/Forms/Textarea';

const Textarea = () => {
  return (
    <div>
      <Formik
        initialValues={{ textareavalue: '' }}
        validationSchema={yup.object({
          textareavalue: yup.string().required('Field is required'),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, 2, null));
          resetForm({});
        }}
      >
        <Form style={{ margin: '10px 0' }}>
          <label>Textarea</label>
          <div style={{ width: '250px', height: '300px' }}>
            <TextareaField name='textareavalue' />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Textarea;
