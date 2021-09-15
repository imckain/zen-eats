import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)} 
                onSearchTermSubmit={() => console.log('submitted')}
            />
            <Text>{searchTerm}</Text>
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