import { useFormikContext } from 'formik';
import React from 'react';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    errors,
    touched,
    values,
    setFieldTouched,
    setFieldValue,
    handleChange,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        {...otherProps}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
