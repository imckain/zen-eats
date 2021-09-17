import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [reviews, setReviews] = useState([]);
    
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };
    
    const getReviews = async (id) => {
        const response = await yelp.get(`/${id}/reviews`);
        setReviews(response.data.reviews);
    }
    
    useEffect(() => {
        getResult(id);
    }, []);
    
    useEffect(() => {
        getReviews(id);
    }, []);
    
    // console.log(reviews);
    // console.log(reviews.id);
    // console.log(reviews.reviews[1].text);
    // const DATA = [
    //     {
    //         id: reviews[1].id,
    //         rating: reviews[1].rating,
    //         name: reviews[1].user.name,
    //         text: reviews[1].text,
    //         link: reviews[1].url,
    //     },
    //     {
    //         id: reviews[2].id,
    //         rating: reviews[2].rating,
    //         name: reviews[2].user.name,
    //         text: reviews[2].text,
    //         link: reviews[2].url,
    //     },
    //     {
    //         id: reviews[3].id,
    //         rating: reviews[3].rating,
    //         name: reviews[3].user.name,
    //         text: reviews[3].text,
    //         link: reviews[3].url,
    //     },
    // ]

    if (!result) {
        return null;
    }


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
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={reviews}
                keyExtractor={(reviews) => reviews.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.user.name}</Text>
                            <Text>{item.rating}</Text>
                            <Text>{item.text}</Text>
                        </View>
                    )
                }}
                style={styles.reviewFlatListStyle}
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
    reviewFlatListStyle: {
        fontSize: 15,
        width: 250,
        height:250,
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginLeft: 10,
        borderRadius: 4,
    }
});

export default ResultsShowScreen;