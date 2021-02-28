
const initialLoginStateStates = {
    isLoading: false,
    userId: null,
    userToken: null,
    loginError: null,
    user:null,
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
                isLoading: false,
                user: action.payload.userdetails,
            }
        case 'LOGOUT':
            return {
                ...prevState,
                userToken: null,
                userId: null,
                isLoading: false,
                loginError: null,
                user: null,
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