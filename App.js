import 'react-native-gesture-handler';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import RootStackScreen from './screens/StacksScreen/RootStackScreen';
import ProfileStackScreen from './screens/StacksScreen/ProfileStackScreen';


export default function App() {

	const [isLoading, setIsloading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(true);

	return (
		(isLoading == true) ? <View><ActivityIndicator size="large" /></View> : <ProfileStackScreen />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
