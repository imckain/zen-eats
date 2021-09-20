import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
// import location from './useLocation';
import * as Location from 'expo-location';

export default () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const useLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(`latitude: ${location.coords.latitude}`);
            console.log(`longitude: ${location.coords.longitude}`);
    };

    const searchAPI = async (defaultTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: defaultTerm,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    radius: 4000,
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Something went wrong 😢')
        }
    };

    useEffect(() => {
        useLocation({}).then(searchAPI(''))
    }, []);

    return [searchAPI, results, errorMessage];
};