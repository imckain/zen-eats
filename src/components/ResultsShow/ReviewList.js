import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const ReviewList = ({ reviews }) => {

    return (
        <View>
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

export default ReviewList;
