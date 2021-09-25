import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Linking, Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const DetailHeader = ({ result }) => {
  const openOrClosed = (item) => {
    try {
      if(item.hours[0].is_open_now === true) {
        return <Text style={styles.openNowStyle}>{<View style={styles.openStyle}><Text style={styles.openTextStyle} >OPEN</Text></View> }</Text>
      }
      if(item.hours[0].is_open_now === false) {
        return <Text style={styles.openNowStyle}>{<View style={styles.closedStyle}><Text style={styles.closedTextStyle} >CLOSED</Text></View>} </Text>
      }
    } catch (error) {
      return <Text>Hours Unavailable</Text>;
    }
  }

  const handlePhoneCall = useCallback(async(tel) => {
    await Linking.canOpenURL(`tel:${tel}`).then(() =>
      Linking.openURL(`tel:${tel}`)
  )}, []);

  const handleAddress = useCallback(async(lat, lon, label) => {
    const link = `maps:0,0?q=${label}@${lat},${lon}`
    await Linking.canOpenURL(link).then(() =>
      Linking.openURL(link)
  )}, []);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>{result.name}</Text>
        <Text style={styles.headerDetails}>{result.rating}  <FontAwesome name="star" size={14} color="#dbbc54" />  •  {result.review_count} Reviews  •  {result.price} </Text>
      </View>
      <View style={styles.detailContainerStyle}>
        <Text style={styles.categoryStyle}>{result.categories[0].title} </Text>
        {openOrClosed(result)}
        <Pressable onPress={() => handlePhoneCall(result.phone)}>
          <Text style={styles.detailTextStyle}><FontAwesome5 name="phone-alt" size={20} color="#35C75A" />  {result.display_phone} </Text>
        </Pressable>
        <Pressable onPress={() => handleAddress(result.coordinates.latitude, result.coordinates.longitude, result.name)}>
          <Text style={styles.detailTextStyle}><FontAwesome name="map-o" size={20} color="black" />  {result.location.display_address[0]}, {result.location.display_address[1]} </Text>
        </Pressable>
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
    fontWeight: '500',
  },
  openNowStyle: {
    marginVertical: 8,
  },
  openStyle: {
    backgroundColor: 'green',
    width: 60,
    paddingVertical: 5,
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
    paddingVertical: 5,
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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