import React, { useState } from 'react';
import * as Yup from 'yup';

import { StyleSheet } from 'react-native';
import listingApi from '../api/listings';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Cameras', value: 3, backgroundColor: 'blue', icon: 'camera' },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progresss) => setProgress(progresss)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing');
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingContainer>
        <UploadScreen
          progress={progress}
          visible={uploadVisible}
          onDone={() => setUploadVisible(false)}
        />
        <AppForm
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
          />
          <AppFormPicker
            items={categories}
            name="category"
            // numberOfColumns={3}
            // PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="50%"
          />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </AppForm>
      </KeyboardAvoidingContainer>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
  },
});

export default ListingEditScreen;
