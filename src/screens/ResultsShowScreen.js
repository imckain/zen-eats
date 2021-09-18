import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
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
    };
    
    useEffect(() => {
        getResult(id);
    }, []);
    
    useEffect(() => {
        getReviews(id);
    }, []);

    if (!result) {
        return null;
    };

    // console.log(result.hours[0].is_open_now);

    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerStyle}>{result.name}</Text>
                <Text style={styles.headerDetails}>{result.rating}  <FontAwesome name="star" size={14} color="#dbbc54" />  •  {result.review_count} Reviews  •  {result.price} </Text>
            </View>
            <View style={styles.detailContainerStyle}>
                <Text style={styles.categoryStyle}>{result.categories[0].title} </Text>
                <Text style={styles.openNowStyle}>Open Now: {result.hours[0].is_open_now = 'true' ? '✅' : '❌'} </Text>
                <Text style={styles.detailTextStyle}><FontAwesome5 name="phone-alt" size={20} color="#35C75A" />  {result.display_phone} </Text>
                <Text style={styles.detailTextStyle}><FontAwesome name="map-o" size={20} color="black" />  {result.location.display_address[0]}, {result.location.display_address[1]} </Text>
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
                        <View style={styles.containerStyle}>
                            <View style={styles.reviewFlatListContainerStyle}>
                                <View style={styles.reviewHeaderStyle}>
                                    <Text style={styles.reviewHeaderAuthorStyle}>{item.user.name}</Text>
                                    <Text style={styles.reviewHeaderRatingStyle}>{item.rating}  <FontAwesome name="star" size={18} color="#dbbc54" /> </Text>
                                </View>
                                <View style={styles.reviewContainerStyle}>
                                    <View style={styles.quoteLinesContainerStyle}>
                                        <View style={styles.quoteLineStyle} />
                                        <View style={styles.quoteLine2Style} />
                                    </View>
                                    <Text style={styles.reviewStyle}>{item.text}</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.linkButtonStyle} >
                                    <Text style={styles.linkButtonTextStyle}>Read Full Review</Text>
                                </TouchableOpacity>
                            </View>
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
        flexDirection: 'column'
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
        fontSize: 16,
        fontWeight: '600',
    },
    detailTextStyle: {
        paddingVertical: 7,
        fontSize: 20,
    },
    flatListStyle: {
        marginVertical: 15,
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginLeft: 10,
        borderRadius: 4,
    },
    reviewFlatListStyle: {
        fontSize: 15,
        width: '100%',
        height: 'auto',
    },
    reviewFlatListContainerStyle: {
        height: 'auto',
        width: 300,
        padding: 15,
        // borderBottomColor: 'black',
        // borderBottomWidth: 5
    },
    reviewHeaderStyle: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        alignItems: 'center',
    },
    reviewHeaderAuthorStyle: {
        fontSize: 22,
        fontWeight: '600',
    },
    reviewHeaderRatingStyle: {
        fontSize: 18,
        fontWeight: '600',
    },
    reviewContainerStyle: {
        flexDirection: 'row',
    },
    quoteLinesContainerStyle: {
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    quoteLineStyle: {
        width: 3,
        height: '100%',
        // backgroundColor: 'rgba(44, 44, 44, .29)',
        backgroundColor: '#D32422',
        marginRight: 2,
        borderRadius: 4,
    },
    quoteLine2Style: {
        width: 1.5,
        height: '93%',
        backgroundColor: 'rgba(44, 44, 44, .29)',
        // backgroundColor: '#D32422',
        alignSelf: 'center',
        borderRadius: 4,
    },
    reviewStyle: {
        paddingRight: 52,
        fontSize: 18
    },
    linkButtonStyle: {
        width: '50%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: '#D32422',
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 15,
        // backgroundColor: 'black'
    },
    linkButtonTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        // color: 'black'
    },
});

export default ResultsShowScreen;