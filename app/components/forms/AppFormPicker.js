import { useFormikContext } from 'formik';
import React from 'react';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  numberOfColumns,
  PickerItemComponent,
}) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  return (
    <>
      <AppPicker
        width={width}
        items={items}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
