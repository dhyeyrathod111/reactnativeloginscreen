import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#6327ee" />
        </View>
    )
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
