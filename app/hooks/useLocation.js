import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      console.log({ latitude, longitude });
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log('Error getting location', error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
