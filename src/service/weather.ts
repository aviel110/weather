import { Alert } from 'react-native';
import axios from 'axios';

import { getCurrentLocation } from '../utils/location';

const conf = require('../config');

export const ERRORS = {
  503: {
    title: 'Error 503 - Service Unavailable',
    message:
      "AccuWeather Api server temporarily unable to handle the request. This may be due to the current apiKey has reached its max limit requests.\nYou can replace the key in 'Preferences' section.",
  },
  401: {
    title: 'Error 401 - Service Unauthorized',
    message: "This may be due to an incorrect/invalid apiKey.\nYou can replace the key in 'Preferences' section.",
  },
};

let apiKey = conf.keys[0];
let autoCompleteCancelToken = undefined;
let dailyForecastsCancelToken = undefined;
let geopositionSearchCancelToken = undefined;

const instance = axios.create({
  baseURL: 'http://dataservice.accuweather.com',
});

instance.interceptors.request.use(
  config => config,
  err => Promise.reject(err),
);

const handleResponseError = err => {
  if (axios.isCancel(err)) {
    return;
  }
  if (!err.response) {
    Alert.alert('Error', err.message);
    return Promise.reject(err);
  }

  const errStatusCode = err.response.status.toString();
  if (errStatusCode in ERRORS) {
    Alert.alert(ERRORS[errStatusCode].title, ERRORS[errStatusCode].message);
    return Promise.reject(err);
  }

  Alert.alert('Error - ' + errStatusCode, err.message);

  return Promise.reject(err);
};

instance.interceptors.response.use(res => res, handleResponseError);

export const getAutocompleteSearch = async query => {
  if (typeof autoCompleteCancelToken != typeof undefined) {
    autoCompleteCancelToken.cancel('Operation canceled due to new request.');
  }
  autoCompleteCancelToken = axios.CancelToken.source();

  try {
    const response = await instance.get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`, { cancelToken: autoCompleteCancelToken.token });
    return response?.data;
  } catch (error) {
    console.log('getAutocompleteSearch error: ', error.message);
  }
};

export const getCurrentConditions = async (locationKey, details = false) => {
  try {
    const response = await instance.get(`/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=${details}`);
    return response?.data;
  } catch (error) {
    console.log('getCurrentConditions error: ', error);
  }
};

export const get5DaysDailyForecasts = async (locationKey, details = false) => {
  if (typeof dailyForecastsCancelToken != typeof undefined) {
    dailyForecastsCancelToken.cancel('Operation canceled due to new request.');
  }
  dailyForecastsCancelToken = axios.CancelToken.source();

  try {
    const response = await instance.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=${details}`, {
      cancelToken: dailyForecastsCancelToken.token,
    });
    console.log('get5DaysDailyForecasts responded!');
    return response?.data;
  } catch (error) {
    console.log('get5DaysDailyForecasts error: ', error);
  }
};

export const getGeopositionSearch = async () => {
  if (typeof geopositionSearchCancelToken != typeof undefined) {
    geopositionSearchCancelToken.cancel('Operation canceled due to new request.');
  }
  geopositionSearchCancelToken = axios.CancelToken.source();

  try {
    const location = await getCurrentLocation();
    const query = `${location.coords.latitude},${location.coords.longitude}`;
    const response = await instance.get(`/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${query}`, {
      cancelToken: geopositionSearchCancelToken.token,
    });

    return response?.data;
  } catch (error) {
    console.log('getGeopositionSearch error: ', error.message);
  }
};

export const setApiKey = (newKey: string) => {
  apiKey = newKey;
};
