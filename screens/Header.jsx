import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ navigation, previous , pageTitle }) => {
    return (
        <Appbar.Header>
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={pageTitle} />   
        </Appbar.Header>
    )
}
export default Header;
