import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from '../components/ResultsDetail';
import { useMemo } from 'react/cjs/react.development';


const ResultsList = (props) => {
  if (!props.results.length) {
      return null;
  }

  const memoizedValue = useMemo(() => renderItem, [props.results])

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={memoizedValue}
      />
    </View>
  )
};

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('ResultsShow', { id: item.id })}>
    <ResultsDetail result={item} />
  </TouchableOpacity>
)

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

export default withNavigation(ResultsList);