import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Index from './screens/StacksScreen/Index';
import { rootReducer } from './reducers/'
import { Provider } from 'react-redux';

export default function App() {

    const store = createStore(rootReducer, applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <Index />
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
