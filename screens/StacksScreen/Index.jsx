import React, { useEffect } from 'react';
import RootStackScreen from './RootStackScreen';
import ProfileStackScreen from './ProfileStackScreen'
import Loader from '../../component/Loader';
import { connect } from 'react-redux';
import { demouserLogin } from '../../actions/userLogin';

const Index = props => {

    useEffect(() => {
        setTimeout(() => {
            if (props.login.isLoading !== false) props.dispatch(demouserLogin());
        }, 1000);
    })

    

    if (props.login.isLoading == true) {
        return (
            <Loader />
        )
    } else {
        return (
            (props.login.userToken === null) ? <RootStackScreen /> :  <ProfileStackScreen /> 
        )
    }
}

const mapStateToProps = props => {
    return {
        login: props.loginReducer,
    };
}


export default connect(mapStateToProps)(Index);
