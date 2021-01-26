
const initialLoginStateStates = {
    isLoading: true,
    userId: null,
    userToken: null
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
                isLoading: false
            }

        case 'LOGIN_TIMEOUT':
            return {
                ...prevState,
                isLoading: false,
            }
        default:
            return {
                ...prevState,
            }
    }
}

export default loginReducer;