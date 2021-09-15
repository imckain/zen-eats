import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [results, setResults] = useState([]);

    const searchAPI = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'columbus'
            }
        });
        setResults(response.data.businesses);
    };
    
    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm} 
                onSearchTermSubmit={searchAPI}
            />
            <Text>{results.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        height: '100%',
    }
});

export default SearchScreen;