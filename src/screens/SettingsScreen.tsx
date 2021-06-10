import React from 'react'
// react-native
import {
    SafeAreaView,
    StatusBar
} from 'react-native'
// components
import Header from '../components/header';
import Logout from '../components/logout';

const SettingsScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'rgba(227,242,253, 1)' }}>
            <StatusBar barStyle='default' />
            <Header title='Settings' />
            <Logout navigation={navigation} />
        </SafeAreaView>
    );
}

export default SettingsScreen
