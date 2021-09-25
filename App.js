import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet} from 'react-native';

import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';
import TitleLogo from './src/components/Header/TitleLogo';

import { FontAwesome5 } from '@expo/vector-icons';

const navigator = createStackNavigator({
	Search: SearchScreen,
	ResultsShow: ResultsShowScreen,
}, 
{
	initialRouteName:'Search',
	defaultNavigationOptions: {
		headerTitle: () => <TitleLogo />,
		headerBackImage: () => <FontAwesome5 name="chevron-left" size={26} color="black" style={styles.backButton} />,
		headerBackTitle: ' '
	},
});

const styles = StyleSheet.create({
	backButton: {
		marginLeft: 18,
		marginBottom: 10,
		marginTop: 5,
	},
})

export default createAppContainer(navigator);