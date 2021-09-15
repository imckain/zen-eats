import axios from 'axios';

const { yelpAPIKey } = YELP_CONFIG;

const YELP_API_KEY = yelpAPIKey;

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: YELP_API_KEY
    }
});