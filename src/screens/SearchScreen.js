import React, { useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();
  
  const isLoading = (item) => {
    if(item[0] === undefined) {
      return (
        <View style={styles.activityIndicatorContainerStyle}>
          <ActivityIndicator size='large' color='black' style={styles.activityIndicatorStyle} />
        </View>
      );
    } else return
  };

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  
  const paddingBlock = (item) => {
    const topTier = item.price === '$$$$';
    if(topTier === false) {
      return <View style={styles.paddingBlock} />
    };
  };
  
  return (
    <View style={styles.resultsContainerStyle}>
      <SafeAreaView>
        {isLoading(results)}
        <StatusBar style='dark' />
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => searchAPI(searchTerm)}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <ScrollView style={styles.resultsListsStyles}>
          <View style={styles.topPaddingBlock} />
          <ResultsList 
            title='Value Menu' 
            results={filterResultsByPrice('$')}
          />
          <ResultsList 
            title="Budget Ballin'"
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
          {paddingBlock(results)}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  activityIndicatorContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 300,
  },
  resultsContainerStyle: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  errorMessage: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 38,
    paddingTop: 35,
  },
  topPaddingBlock: {
    height: 20
  },
  paddingBlock: {
    height: 130,
  },
});

export default SearchScreen;