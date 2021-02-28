import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

export const userLogin = ({ email, password }) => {
    return async dispatch => {
        var formData = new FormData();
        formData.append('email', email); formData.append('password', password);
        const response = await axios.post('http://192.168.0.103/dhyey_rathod/qbitapi/api/userlogin', formData);
        if (response.data.api_status === true) {
            dispatch({
                type: 'LOGIN', payload: {
                    id: response.data.userdetails.user_id,
                    token: response.data.token,
                    userdetails: response.data.userdetails
                }
            });
            storeUserJWT(response.data.token);
        } else {
            dispatch({ type: 'LOGINERROR', payload: { message: response.data.message } })
        }
    }
}

const storeUserJWT = async (accessToken) => {
    await AsyncStorage.setItem('logintoken', accessToken);   
}


export const demouserLogin = () => {
    return async dispatch => {
        dispatch({ type: 'LOGIN_TIMEOUT' });
    }
}

export const retrieveToken = accessToken => {
    return async dispatch => {
        var formData = new FormData();
        formData.append('accessToken', accessToken);
        const response = await axios.post('http://192.168.0.103/dhyey_rathod/qbitapi/api/tokenData', formData);
        dispatch({
            type: 'LOGIN', payload: {
                id: response.data.userdetails.user_id,
                token: response.data.token,
                userdetails: response.data.userdetails
            }
        });
    }
}

