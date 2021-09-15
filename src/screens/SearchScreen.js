import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm} 
                onSearchTermSubmit={() => searchAPI(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title='Cost Effective' 
                    results={filterResultsByPrice('$')}
                    />
                <ResultsList 
                    title='Not Cheap' 
                    results={filterResultsByPrice('$$')}
                    />
                <ResultsList 
                    title='Someone Got Paid' 
                    results={filterResultsByPrice('$$$')}
                    />
                <ResultsList 
                    title='Fancy Pants' 
                    results={filterResultsByPrice('$$$$')}
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        flex: 1,
    }
});

export default SearchScreen;