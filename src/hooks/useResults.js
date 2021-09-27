import React, { useCallback, useEffect, useState } from 'react';
import yelp from '../api/yelp';
import * as Location from 'expo-location';

export default () => {
  const [location, setLocation] = useState(null);
  const [locationErrorMessage, setLocationErrorMessage] = useState(null);
  const [results, setResults] = useState([]);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      setLocationErrorMessage('Permission to access location was denied');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    console.log('Location Checked');
    setLocation(location.coords);
  };
  
  const searchAPI = useCallback(async (defaultTerm) => {
    try {
      console.log('searchAPI() ran');
      console.log(`lat: ${location.latitude}`);
      console.log(`lon: ${location.longitude}`);
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: defaultTerm,
          latitude: location.latitude,
          longitude: location.longitude,
          radius: 4000,
        }
      });
      console.log(response.status);
      console.log(response.data);
      console.log(response.headers);
      setResults(response.data.businesses);
    } catch (error) {
      console.log('error: ' + error);
      setApiErrorMessage('Something went wrong 😢 \n Check back later')
    }
  }, [location]);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      searchAPI('');
    }
  }, [location])

  console.log(results);

  return [searchAPI, results, apiErrorMessage, location, locationErrorMessage];
};