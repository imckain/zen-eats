import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {

    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating}  <FontAwesome name="star" size={14} color="#dbbc54" />  •  {result.review_count} Reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
    },
    nameStyle: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 3,
    },
});

export default ResultsDetail;