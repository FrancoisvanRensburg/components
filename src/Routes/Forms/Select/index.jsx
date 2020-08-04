import React from 'react';
import { Formik, Form } from 'formik';

import CustomDropdown from '../../../shared/components/Forms/Select';

const data = [
  { _id: '001', select: 'Select Option 1' },
  { _id: '002', select: 'Select Option 2' },
  { _id: '003', select: 'Select Option 3' },
  { _id: '004', select: 'Select Option 4' },
];

const Dropdown = () => {
  return (
    <Formik
      initialValues={{
        customSelect: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, 2, null));
        setSubmitting(false);
      }}
    >
      <Form>
        <div style={{ width: '250px' }}>
          <CustomDropdown
            name='customSelect'
            options={data}
            getOptionLabel={(option) => option.select}
            getOptionValue={(option) => option._id}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default Dropdown;
