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
    <View style={styles.resultsContainerStyle}>
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => searchAPI(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.resultsListsStyles}>
        <View style={styles.topPaddingBlock} />
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
        <View style={styles.bottomPaddingBlock} />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  resultsContainerStyle: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  topPaddingBlock: {
    height: 20
  },
  bottomPaddingBlock: {
    height: 40
  },
});

export default SearchScreen;