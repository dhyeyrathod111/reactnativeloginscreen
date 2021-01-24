
const initialLoginStateStates = {
    isLoading: true,
    username: null,
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
                userToken: action.token,
                username: action.id,
                isLoading: false
            }
        case 'LOGOUT':
            return {
                ...prevState,
                userToken: null,
                username: null,
                isLoading: false
            }

        default:
            break;
    }
}

export default loginReducer;