import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { TextInput, Button, Dialog, Portal } from 'react-native-paper';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userLogin';

const LoginScreen = (props, { navigation }) => {

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('1234');

    const handelSubmit = () => {
        props.dispatch({ type: 'LOGINPROCESS' })
        props.dispatch(userLogin({ email, password }))
    }
    if (props.login.loginError != null) {
        Alert.alert("Error", props.login.loginError, [
            { text: "OK", onPress: () => props.dispatch({ type: 'LOGOUT' }) }
        ], { cancelable: false }
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome To Qbit!</Text>
            </View>

            <View style={styles.inputField}>
                <TextInput
                    label="Email"
                    focus={true}
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    label="Password"
                    focus={true}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <View style={styles.button}>
                <View style={styles.action, { marginEnd: 10 }}>
                    <TouchableHighlight>
                        <Button mode="contained" onPress={handelSubmit}>
                            Login
                        </Button>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = props => {
    return {
        login: props.loginReducer,
    };
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 50
    },
    inputField: {
        padding: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#6327ee',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    // textInput: {
    //     flex: 1,
    //     marginTop: Platform.OS === 'ios' ? 0 : -12,
    //     paddingLeft: 10,
    //     color: '#05375a',
    // },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
