import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableHighlight, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage'
import { useTheme, Drawer, Avatar, Title, Caption, Paragraph, TouchableRipple, Switch, Text } from 'react-native-paper';

const DrowerContent = props => {
    const logoutProcess = async () => {
        await AsyncStorage.removeItem('logintoken');
        props.dispatch({ type: 'LOGOUT' })
    }
    console.log(props.loginauth);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c27.0.160.160a/p160x160/10264317_636482179762376_8646865040241306879_n.jpg?_nc_cat=105&ccb=3&_nc_sid=dbb9e7&_nc_ohc=M-OXOVWtTRYAX8T0UIU&_nc_ht=scontent-bom1-1.xx&tp=27&oh=8c928946f8ac8d9df4a4c800b859817a&oe=6062F135'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}> {props.loginauth.email_id} </Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={logoutProcess}
                />
            </Drawer.Section>
        </View>
    )
}


const mapStateToProps = props => {
    return {
        loginauth: props.loginReducer.user,
    };
}


export default connect(mapStateToProps)(DrowerContent);

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});