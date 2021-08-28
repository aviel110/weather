import { PermissionsAndroid } from 'react-native';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

const getLocationPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Enable location access',
      message: 'Please enable location services.',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use locationa');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getCurrentLocation = (): Promise<GeolocationResponse> =>
  new Promise<GeolocationResponse>(async (resolve, reject) => {
    await getLocationPermissions();

    Geolocation.getCurrentPosition(
      info => resolve(info),
      err => reject(err),
    );
  });
