import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const DetailHeader = ({ result }) => {

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>{result.name}</Text>
        <Text style={styles.headerDetails}>{result.rating}  <FontAwesome name="star" size={14} color="#dbbc54" />  •  {result.review_count} Reviews  •  {result.price} </Text>
      </View>
      <View style={styles.detailContainerStyle}>
        <Text style={styles.categoryStyle}>{result.categories[0].title} </Text>
        <Text style={styles.openNowStyle}>{result.hours[0].is_open_now === true ? <View style={styles.openStyle}><Text style={styles.openTextStyle} >OPEN</Text></View> : <View style={styles.closedStyle}><Text style={styles.closedTextStyle} >CLOSED</Text></View>} </Text>
        <Text style={styles.detailTextStyle}><FontAwesome5 name="phone-alt" size={20} color="#35C75A" />  {result.display_phone} </Text>
        <Text style={styles.detailTextStyle}><FontAwesome name="map-o" size={20} color="black" />  {result.location.display_address[0]}, {result.location.display_address[1]} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  headerStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 15,
    width: '100%',
  },
  headerDetails: {
    marginBottom: 7,
    fontSize: 18,
  },
  detailContainerStyle: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  categoryStyle: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '400',
  },
  openNowStyle: {
    marginBottom: 8,
    // fontSize: 20,
    // fontWeight: '600',
    // paddingTop: 3,
    // width: 80,
    // alignContent: 'stretch',
    // alignItems: 'stretch',
    // textAlign: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  openStyle: {
    backgroundColor: 'green',
    width: 60,
    // paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // alignSelf: 'stretch'
    // borderColor: 'black',
    // borderWidth: 2,
    borderRadius: 4,
  },
  openTextStyle: {
    textAlign: 'center',
    color: 'white',
    width: '100%',
    fontWeight: '600',
    fontSize: 17,
  },
  closedStyle: {
    backgroundColor: 'red',
    width: 80,
    // paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // alignSelf: 'stretch'
    // borderColor: 'black',
    // borderWidth: 2,
    borderRadius: 4,
  },
  closedTextStyle: {
    textAlign: 'center',
    color: 'white',
    width: '100%',
    fontWeight: '600',
    fontSize: 17,
  },
  detailTextStyle: {
    paddingVertical: 7,
    fontSize: 20,
  },
});

export default DetailHeader;