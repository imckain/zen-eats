import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    
    return (
        <View style={styles.background}>
            <SearchBar />
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