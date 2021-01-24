import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './reducers/loginReducers';
// import {signinAction} from './actions/authActions'

import RootStackScreen from './screens/StacksScreen/RootStackScreen';
import ProfileStackScreen from './screens/StacksScreen/ProfileStackScreen';
import Loader from './component/Loader';
import { AuthContext } from './component/context';


export default function App() {

	const [loginState, dispatch] = React.useReducer(loginReducer)

	const authContext = React.useMemo(() => ({
		signIn: () => {
			dispatch({ type: 'LOGIN', id: 10, token: '123' })
		},
		signOut: () => {
			dispatch({ type: 'LOGOUT' })
		},
	}));


	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'RETRIEVE_TOKEN' })
		}, 1000);
	}, [])

	if (loginState.isLoading == true) {
		return (
			<Loader />
		)
	} else {
		return (
			<AuthContext.Provider value={authContext}>
				{loginState.userToken == null ? <RootStackScreen /> : <ProfileStackScreen />}
			</AuthContext.Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
