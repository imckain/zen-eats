import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer oL1yFFRiZLIrsvW3v0ovrxCc3l5byiZalXN1x7qDmuL5EIaL5luWc9rrLrBp5qP-rZ6IekeBe-NYbYCf5nmsKcdwIIzwIBBd60wFvX6vTR_EPIFujxn0f49KAyJBYXYx'
    }
});