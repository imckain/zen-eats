import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
	Search: SearchScreen,
	ResultsShow: ResultsShowScreen,
}, 
{
	initialRouteName:'Search',
	defaultNavigationOptions: {
		title: 'Business Search'
	}
});

export default createAppContainer(navigator);