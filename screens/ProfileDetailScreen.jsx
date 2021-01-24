import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function ProfileDetailScreen({ scene, previous, navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is profile screen</Text>
        </View>
    )
}

export default ProfileDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
