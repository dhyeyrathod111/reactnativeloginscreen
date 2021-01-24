import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

function RegistrationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is registration screen</Text>
            <Button icon="camera" mode="contained" onPress={() => navigation.goBack()}>
                Go to Login
            </Button>
        </View>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});