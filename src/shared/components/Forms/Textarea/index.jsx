import React from 'react';
import { useFormikContext, useField } from 'formik';

import { StyledLabel, TextareaElement } from './Styles';
import { StyledErrorMessage } from '../Styles';

export const TextareaField = ({ label, ...props }) => {
  const { setFieldTouched, handleChange, submitForm } = useFormikContext();
  const [field, meta] = useField(props);

  function updateBlur() {
    setFieldTouched(props.name, true);
    submitForm();
  }
  return (
    <>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <TextareaElement
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleChange}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });
  return (
    <>
      {label && (
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      )}
      <TextareaElement className='textarea' {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className='error'>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};
