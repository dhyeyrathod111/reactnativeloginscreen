import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ProfileStackScreen = props =>  {
    return (
        <View style={styles.container}>
            <Text>Welcome to profile</Text>
        </View>
    )
}

export default ProfileStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
