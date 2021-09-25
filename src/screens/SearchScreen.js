import React, { useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { SafeAreaView } from 'react-navigation';


const SearchScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();
  
  const isLoading = (item) => {
    if(item[0] === undefined) {
      return (
        <View style={styles.activityIndicatorContainerStyle}>
          <ActivityIndicator size='large' color='black' style={styles.activityIndicatorStyle} />
        </View>
      )
    } else return
  }

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
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
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView style={styles.resultsListsStyles}>
          <View style={styles.topPaddingBlock} />
          <ResultsList 
            title='Value Menu' 
            results={filterResultsByPrice('$')}
            />
          <ResultsList 
            title='Chain City' 
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
  topPaddingBlock: {
    height: 20
  },
  bottomPaddingBlock: {
    height: 40
  },
});

export default SearchScreen;