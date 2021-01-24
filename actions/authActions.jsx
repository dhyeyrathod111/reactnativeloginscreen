
export const signinAction = () => {
    return async dispatch => {

        // const response_promiss = await fetch(`${config.get('api_url')}/all_project`);
        // const response = await response_promiss.json();
        dispatch({ type: 'LOGIN', id: 10, token: '123' })
    }
}