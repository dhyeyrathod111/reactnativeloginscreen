import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../LoginScreen';
import RegistrationScreen from '../RegistrationScreen';
import Header from '../Header';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={'login'}>
                <RootStack.Screen name="login"
                    component={LoginScreen}
                    options={{
                        header: (props) => <Header {...props} pageTitle={'Login'} />,
                    }} />
                <RootStack.Screen name="registration"
                    component={RegistrationScreen}
                    options={{
                        header: (props) => <Header {...props} pageTitle={'Registration'} />,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

function LogoTitle() {
    return (
        <Text>This is profile screen</Text>
    );
}

export default RootStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});