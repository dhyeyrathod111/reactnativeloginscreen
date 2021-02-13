import axios from "axios";

export const userLogin = ({ email, password }) => {
    return async dispatch => {
        var formData = new FormData();
        formData.append('email', email); formData.append('password', password);
        const response = await axios.post('http://192.168.0.102/dhyey_rathod/qbitapi/api/userlogin', formData);
        if (response.data.api_status === true) {
            dispatch({ type: 'LOGIN', payload: { id: response.data.userdetails.user_id, token: response.data.token } })
        } else {
            dispatch({ type: 'LOGINERROR', payload: { message: response.data.message } })
        }
    }
}



export const demouserLogin = () => {
    return async dispatch => {
        dispatch({ type: 'LOGIN_TIMEOUT' });
    }
}

