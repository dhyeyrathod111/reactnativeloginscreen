import React, { useEffect } from 'react';
import RootStackScreen from './RootStackScreen';
import ProfileStackScreen from './ProfileStackScreen'
import Loader from '../../component/Loader';
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux';
import { retrieveToken } from '../../actions/userLogin';

const Index = props => {

    const retrieveTokencall = async () => {
        try {
            let userToken = await AsyncStorage.getItem('logintoken');
            if (userToken !== null) {
                props.dispatch(retrieveToken(userToken))
            }
        } catch (error) {
            props.dispatch({ type: 'LOGOUT' });
        }
    }

    useEffect(() => {
        if (props.login.userId == null) {
            retrieveTokencall();
        }
    });

    if (props.login.isLoading == true) {
        return (
            <Loader />
        )
    } else {
        return (
            (props.login.userToken == null || props.login.userId == null) ? <RootStackScreen /> : <ProfileStackScreen />
        )
    }
}

const mapStateToProps = props => {
    return {
        login: props.loginReducer,
    };
}


export default connect(mapStateToProps)(Index);

