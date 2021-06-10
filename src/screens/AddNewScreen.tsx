import React from 'react';
// react-native
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
// components
import Header from '../components/header';

const AddNewScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(227,242,253, 1)' }}>
            <StatusBar barStyle='default' />
            <Header title='Add new' />
        </SafeAreaView>
    );
}

export default AddNewScreen
