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
                <Text style={styles.openNowStyle}>Open Now: {result.hours[0].is_open_now === true ? <FontAwesome name="check-circle" size={22} color="green" /> : <FontAwesome name="times-circle" size={22} color="red" />} </Text>
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
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 3,
    },
    detailTextStyle: {
        paddingVertical: 7,
        fontSize: 20,
    },
});

export default DetailHeader;