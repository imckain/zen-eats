import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from '../components/ResultsDetail';


const ResultsList = (props) => {
  if (!props.results.length) {
    return null;
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 15,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 7,
  }
});

export default React.memo(withNavigation(ResultsList));