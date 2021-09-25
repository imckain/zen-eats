import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';

const DetailPhotoList = ({ result }) => {

  return (
    <View>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
        style={styles.flatListStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 15,
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginLeft: 10,
    borderRadius: 4,
  },
});

export default DetailPhotoList;
