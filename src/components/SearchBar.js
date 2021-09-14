import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchBar = () => {
    
    return (
        <View style={styles.backgound}>
            <Text>Boo yah</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    backgound: {
        backgroundColor: 'rgba(240, 238, 238, 1)',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
    }
});

export default SearchBar;