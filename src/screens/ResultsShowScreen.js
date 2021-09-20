import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DetailHeader from '../components/ResultsShow/DetailHeader';
import DetailPhotoList from '../components/ResultsShow/DetailPhotoList';
import ReviewList from '../components/ResultsShow/ReviewList';

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

    return (
        <View style={styles.containerStyle}>
            <DetailHeader result={result} />
            <DetailPhotoList result={result} />
            <ReviewList reviews={reviews} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column'
    },
});

export default ResultsShowScreen;