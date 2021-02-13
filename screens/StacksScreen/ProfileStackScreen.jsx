import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { AuthContext } from '../../component/context';
import { connect } from 'react-redux';
import { useTheme, TextInput, Button } from 'react-native-paper';

const ProfileStackScreen = props => {

    return (
        <View style={styles.container}>
            <TouchableHighlight>
                <Button mode="contained" onPress={() => props.dispatch({ type: 'LOGOUT' })}>
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
