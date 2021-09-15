import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    
    return (
        <View style={styles.searchWrapperStyle}>
            <Ionicons name="ios-search" size={28} color="black" />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder='Search' 
                value={searchTerm}
                onChangeText={onSearchTermChange}
                onEndEditing={onSearchTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchWrapperStyle: {
        height: 50,
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
    inputStyle: {
        backgroundColor: 'rgba(240, 238, 238, 1)',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        // width: '100%',
        height: '100%',
        flex: 1,
    }
});

export default SearchBar;