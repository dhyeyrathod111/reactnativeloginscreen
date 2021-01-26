import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { AuthContext } from '../../component/context';
import { useTheme, TextInput, Button } from 'react-native-paper';


const ProfileStackScreen = props => {


    return (
        <View style={styles.container}>
            <TouchableHighlight>
                <Button mode="contained" onPress={() => { console.log("hello") }}>
                    sign Out
                </Button>
            </TouchableHighlight>
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
