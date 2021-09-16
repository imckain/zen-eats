import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [reviews, setReviews] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    const getReviews = async (id) => {
        const response = await yelp.get(`/${id}/reviews`);
        setReviews(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    useEffect(() => {
        getReviews(id);
    }, []);

    if (!result) {
        return null;
    }

    console.log(reviews);

    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerStyle}>{result.name}</Text>
                <Text style={styles.headerDetails}>{result.rating}  <FontAwesome name="star" size={14} color="#dbbc54" />  •  {result.review_count} Reviews  •  {result.price} </Text>
            </View>
            <View>
                {/* <Text> {result.categories[1].map((i) =>)} </Text> */}
                {/* <Text> {result.is_open} </Text> */}
                <Text><FontAwesome5 name="phone-alt" size={24} color="#35C75A" /> {result.display_phone} </Text>
                <Text><FontAwesome name="map-o" size={24} color="black" /> {result.location.display_address} </Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={reviews}
                    keyExtractor={(reviews) => reviews.id}
                    renderItem={({ item }) => {
                        return <Text>{item}</Text>
                    }}
                />
            </View>
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
    containerStyle: {

    },
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
    },
    flatListStyle: {
        marginVertical: 15,
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginLeft: 10,
        borderRadius: 4,
    }
});

export default ResultsShowScreen;