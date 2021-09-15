import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
    }
});

export default ResultsShowScreen;