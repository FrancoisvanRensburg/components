import React from 'react';
import { useFormikContext, useField } from 'formik';

import { StyledInput, InputElement, StyledLabel } from './Styles';
import { StyledErrorMessage } from '../Styles';

// Input field submit on blur
export const InputField = ({ label, ...props }) => {
  const { setFieldTouched, handleChange, submitForm } = useFormikContext();
  const [field, meta] = useField(props);

  function updateBlur() {
    setFieldTouched(props.name, true);
    submitForm();
  }
  return (
    <StyledInput>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <InputElement
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleChange}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </StyledInput>
  );
};

// Input field submit on button press
export const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledInput>
      {label && (
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      )}
      <InputElement className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className='error'>{meta.error}</StyledErrorMessage>
      ) : null}
    </StyledInput>
  );
};
