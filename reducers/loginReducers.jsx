
const initialLoginStateStates = {
    isLoading: false,
    userId: null,
    userToken: null,
    loginError: null,
}

const loginReducer = (prevState = initialLoginStateStates, action) => {
    switch (action.type) {
        case 'RETRIEVE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false
            }
        case 'LOGIN':
            return {
                ...prevState,
                userToken: action.payload.token,
                userId: action.payload.id,
                isLoading: false
            }
        case 'LOGOUT':
            return {
                ...prevState,
                userToken: null,
                userId: null,
                isLoading: false,
                loginError: null
            }
        case 'LOGIN_TIMEOUT':
            return {
                ...prevState,
                isLoading: false,
            }

        case 'LOGINPROCESS':
            return {
                ...prevState,
                isLoading: true,
            }
        case 'LOGINERROR':
            return {
                ...prevState,
                loginError: action.payload.message,
                isLoading: false,
            }
        default:
            return {
                ...prevState,
            }
    }
}

export default loginReducer;