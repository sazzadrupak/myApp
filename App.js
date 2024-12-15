import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';

import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen';

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requesPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  useEffect(() => {
    requesPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
