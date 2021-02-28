import React from 'react';
import { StyleSheet, View, TouchableHighlight, Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrowerContent from '../../component/DrowerContent';

const ProfileStackScreen = props => {

    const ProfileDrower = createDrawerNavigator();

    return (
        <NavigationContainer>
            <ProfileDrower.Navigator drawerContent={props => <DrowerContent {...props} />}>
                <ProfileDrower.Screen name="Home" component={HomeScreen} />
            </ProfileDrower.Navigator>
        </NavigationContainer>
    )
}



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Homepage"
            />
        </View>
    );
}
export default ProfileStackScreen;