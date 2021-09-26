import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    
  return (
    <View style={styles.searchWrapperStyle}>
      <Ionicons name="ios-search" size={28} color="black" />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder='Search' 
        placeholderTextColor='rgb(175, 175, 175)'
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        clearButtonMode='always'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    height: 50,
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
  inputStyle: {
    backgroundColor: 'rgba(247, 247, 247, 1)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgb(242, 162, 44)',
    paddingHorizontal: 10,
    paddingLeft: 16,
    marginHorizontal: 10,
    height: '100%',
    flex: 1,
    fontSize: 20,
    fontWeight: '500'
  }
});

export default React.memo(SearchBar);