import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

const ProfileStackScreen = props => {
    const logoutProcess = async () => {
        await AsyncStorage.removeItem('logintoken');
        props.dispatch({ type: 'LOGOUT' })
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight>
                <Button mode="contained" onPress={logoutProcess}>
                    sign Out
                </Button>
            </TouchableHighlight>
        </View>
    )
}

const mapStateToProps = props => {
    return {
        loginauth: props.loginReducer,
    };
}


export default connect(mapStateToProps)(ProfileStackScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
